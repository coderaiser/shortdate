'use strict';

const test = require('supertape');
const shortdate = require('..');

test('no args: result is string', (t) => {
    const date = shortdate();
    
    t.equal(typeof date, 'string', 'date should be string');
    
    t.end();
});

test('no args: year should equal', (t) => {
    const date = shortdate().split('.').map(Number);
    const newDate = new Date();
    
    t.equal(date[0], newDate.getFullYear(), 'year should be equal');
    
    t.end();
});

test('args: bad date', (t) => {
    const fn = () => shortdate('hi');
    
    t.throws(fn, /date should be Date!/, 'should throw when type of arg not Date');
    t.end();
});

test('args: bad options', (t) => {
    const fn = () => shortdate(new Date(), 'world');
    
    t.throws(fn, /options should be object!/, 'should throw when type of options not object');
    t.end();
});

test('args: date lower then 10', (t) => {
    const September9 = new Date('9-9');
    const date = shortdate(September9);
    const day = date.split('.')[2];
    
    t.equal('09', day, 'day should be equal');
    t.end();
});

test('options: no sep', (t) => {
    const date = shortdate();
    const {length} = date.split('.');
    
    t.equal(length, 3, 'default separator should be used to divide date');
    t.end();
});

test('options: sep', (t) => {
    const date = shortdate(new Date('9-9'), {
        sep: '#',
    });
    
    const {length} = date.split('#');
    
    t.equal(length, 3, 'separator should be used to divide date');
    t.end();
});

test('options: no order', (t) => {
    const date = shortdate(new Date('9-9'));
    const year = Number(date.split('.')[0]);
    
    t.equal(year, 2001, 'year should be first (big endian used)');
    t.end();
});

test('options: little order', (t) => {
    const date = shortdate(new Date('9-9'), {
        order: 'little',
    });
    
    const year = Number(date.split('.')[2]);
    
    t.equal(year, 2001, 'year should be last');
    t.end();
});

test('options: middle order', (t) => {
    const date = shortdate(new Date('5-9'), {
        order: 'middle',
    });
    
    const month = Number(date.split('.')[0]);
    
    t.equal(month, 5, 'year should be last');
    t.end();
});

test('options: bad order', (t) => {
    const fn = () => {
        shortdate(new Date('5-9'), {
            order: 'hello',
        });
    };
    
    t.throws(fn, /order could be "big", "middle" and "little" only!/, 'should throw when order is not big, middle or little');
    t.end();
});
