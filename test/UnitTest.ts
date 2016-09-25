import adder from '../src/index';
var mocha = require('mocha').assert

describe('The Adder functionality', () => {
    it('should add two numbers together', () => {
        var result: number = adder(2, 3);
        mocha.assert(result).equals(5);
    });
});
