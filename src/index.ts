var fs = require('fs');

abstract class UnitVar {
    value: number;
    unit: string;
    add: <T extends UnitVar>(other: T) => UnitVar;
    subtract: <T extends UnitVar>(other: T) => UnitVar;
    constructor(value: number) {this.value = value;}
}

UnitVar.prototype.add = function<T extends UnitVar> (other: T): UnitVar {
    if(other.unit !== this.unit) throw TypeError('Parameters do not match in unit, got ' + this.unit + ' and ' + other.unit);
    this.value += other.value;
    return this;
}

UnitVar.prototype.subtract = function<T extends UnitVar> (other: T): UnitVar {
    if(other.unit !== this.unit) throw TypeError('Parameters do not match in unit, got ' + this.unit + ' and ' + other.unit);
    this.value -= other.value;
    return this;
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

export {Length, Temperature};