'use strict';

module.exports = function(date) {
    date = date || new Date();
    
    check(date);
     
    var ret,
        day     = date.getDate(),
        month   = date.getMonth() + 1,
        year    = date.getFullYear();
        
    if (month <= 9)
        month   = '0' + month;
    
    if (day <= 9)
        day     = '0' + day;
    
    ret         = year + '.' + month + '.' + day;
    
    return ret;
};

function check(date) {
    var type = {}.toString.call(date);
    
    if (type && type !== '[object Date]')
        throw Error('date should be Date!');
 }

