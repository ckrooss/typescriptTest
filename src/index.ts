var fs = require('fs');

export default function adder(a:number, b:number):number {
    var c: number = a + b;
    return c;
}

console.log('output is: ' + adder(1, 2));