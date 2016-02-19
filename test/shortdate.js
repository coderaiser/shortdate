'use strict';

let test        = require('tape');
let shortdate   = require('..');

test('no args: result is string', (t) => {
   let date = shortdate();
    
    t.equal(typeof date, 'string', 'date should be string');
    
    t.end();
});

test('no args: year should equal', (t) => {
    let date = shortdate().split('.').map(Number);
    let newDate = new Date();
    
    t.equal(date[0], newDate.getFullYear(), 'year should be equal');
    
    t.end();
});

test('args: not date', (t) => {
     let fn = () => shortdate('hi');
    
    t.throws(fn, /date should be Date!/, 'should throw when type of arg not Date');
    t.end();
});

test('args: date lower then 10', (t) => {
    const September9 = new Date('9-9');
    let date = shortdate(September9);
    let day = date.split('.')[2];
    
    t.equal('09', day, 'day should be equal');
    t.end();
});
