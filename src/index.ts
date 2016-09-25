var fs = require('fs');

abstract class UnitVar {
    value: number;
    unit: string;
    constructor(value: number) {this.value = value;}
}

class Temperature extends UnitVar {
    value: number;
    unit: string = '°C';
    constructor(value: number) { super(value); }
}

class Length extends UnitVar {
    value: number;
    unit: string = 'm';
    constructor(value: number) { super(value); }
}

function addUnitVars(a:UnitVar, b:UnitVar):UnitVar {
    if(a.unit !== b.unit) throw TypeError('Parameters do not match in unit, got ' + a.unit + ' and ' + b.unit);
    return Object.create(a.constructor, Object({value: {value: a.value + b.value}}));
}

export {Length, Temperature, addUnitVars};