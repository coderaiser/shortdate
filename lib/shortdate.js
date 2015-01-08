(function(global) {
    'use strict';
    
    if (typeof module !== 'undefined' && module.exports)
        module.exports      = shortdate;
    else
        global.shortdate    = shortdate;
    
    function shortdate() {
        var ret,
            date    = new Date(),
            day     = date.getDate(),
            month   = date.getMonth() + 1,
            year    = date.getFullYear();
            
        if (month <= 9)
            month   = '0' + month;
        
        if (day <= 9)
            day     = '0' + day;
        
        ret         = year + '.' + month + '.' + day;
        
        return ret;
    }
    
})(this);
