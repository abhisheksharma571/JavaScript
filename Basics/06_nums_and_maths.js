const score = 400
const balance = new Number(100)
console.log(score);
console.log(balance);

let num = 255;
console.log(num.toString(2));  // "11111111" (binary)
console.log(num.toString(8));  // "377" (octal)
console.log(num.toString(16)); // "ff" (hexadecimal)


console.log(balance.toString());
console.log(balance.toString().length);     //3
console.log(balance.toFixed(2));      //100.00

const otherNumber = 23.34535
console.log(otherNumber.toPrecision(3));     //23.3
const otherNumber1 = 123.84535
console.log(otherNumber1.toPrecision(3));     //124
const otherNumber2 = 1234.84535
console.log(otherNumber2.toPrecision(3));     //1.23e+3
const hundreds = 1000000
console.log(hundreds.toLocaleString());    //1,000,000
console.log(hundreds.toLocaleString('en-IN'));    //10,00,000

const a = 10;
const b = 3;
console.log(a ** b); // Exponentiation: 1000

console.log(1 / 0); // Infinity
console.log(-1 / 0); // -Infinity

console.log(0 / 0); // NaN
console.log(Math.sqrt(-1)); // NaN

//isNaN(): Determines whether a value is NaN.
console.log(isNaN("abc")); // true
console.log(isNaN(10)); // false
//Number.isNaN(): More reliable method to determine whether a value is NaN.
console.log(Number.isNaN(NaN)); // true
console.log(Number.isNaN("abc")); // false

//isFinite(): Determines whether a value is a finite number.
console.log(isFinite(10)); // true
console.log(isFinite(Infinity)); // false
console.log(isFinite("10")); // true (coerces to number)
//Number.isFinite(): More reliable method to determine whether a value is a finite number.
console.log(Number.isFinite(10)); // true
console.log(Number.isFinite(Infinity)); // false
console.log(Number.isFinite("10")); // false (does not coerce)

//++++++++++++++++++++++++ Maths ++++++++++++++++++++++++++++++
console.log(Math);           //object
console.log(Math.PI); // 3.141592653589793
console.log(Math.E); // 2.718281828459045  The value of e (Euler's number).

console.log(Math.abs(-4));    //absolute value
console.log(Math.round(4.6));    //round-off -> 5
console.log(Math.ceil(4.3));     //ceiling value-5
console.log(Math.floor(4.3));   //floor value-4
console.log(Math.sqrt(25));        //5
console.log(Math.exp(1)); // 2.718281828459045 (e^1)
console.log(Math.log(Math.E)); // 1 (natural logarithm of e)
console.log(Math.pow(2, 3)); // 8 (2^3)
console.log(Math.min(2,6,4,7,1));   //1
console.log(Math.max(23,65,23,13,67));   //67

console.log(Math.sin(Math.PI / 2)); // 1 (sine of π/2)
console.log(Math.cos(Math.PI)); // -1 (cosine of π)
console.log(Math.tan(Math.PI / 4)); // 1 (tangent of π/4)


console.log(Math.random());     //random number between 0(inclusive) and 1(exclusive)
console.log(Math.floor(Math.random()*10)+1);  

const min = 10
const max = 20
console.log(Math.floor(Math.random()*(max - min + 1)) + min);    // Random integer between 10 and 20 (inclusive)