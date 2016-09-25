import * as unit from '../src/index';
var expect = require('chai').expect;

describe('The Adder functionality', () => {
    it('should add two numbers of same unit together', () => {
        var temp1 = new unit.Temperature(12);
        var temp2 = new unit.Temperature(24);
        var result: unit.Temperature = unit.addUnitVars(temp1, temp2);

        expect(result).to.have.a.property('value').that.equals(36);
    });

    it('should not add two numbers of differing units', () => {
        var length = new unit.Length(12);
        var temperature = new unit.Temperature(36);

        expect(() => {unit.addUnitVars(length, temperature)}).to.throw(TypeError);
    });
});
