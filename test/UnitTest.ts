import adder from '../src/index';
var expect = require('chai').expect;

describe('The Adder functionality', () => {
    it('should add two numbers together', () => {
        var result: number = adder(2, 3);

        expect(5).to.be.a('number').equal(5);
    });
});
