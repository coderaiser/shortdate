'use strict';

module.exports = (date, options) => {
    date = date || new Date();
    
    check(date, options);
    
    if (!options) {
        options = {};
    }
    
    const {
        sep = '.',
        order = 'big',
    } = options;
    
    let day = date.getDate();
    let month = date.getMonth() + 1;
    const year = date.getFullYear();
    
    if (month <= 9)
        month = '0' + month;
    
    if (day <= 9)
        day = '0' + day;
    
    switch(order) {
    case 'big':
        return [year, month, day].join(sep);
    
    case 'middle':
        return [month, day, year].join(sep);
    
    case 'little':
        return [day, month, year].join(sep);
    
    default:
        throw Error('order could be "big", "middle" and "little" only!');
    }
};

function check(date, options) {
    const type = {}.toString.call(date);
    
    if (date && type !== '[object Date]')
        throw Error('date should be Date!');
    
    if (options && typeof options !== 'object')
        throw Error('options should be object!');
}

