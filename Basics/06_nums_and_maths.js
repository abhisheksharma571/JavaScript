const score = 400
const balance = new Number(100)
console.log(score);
console.log(balance);

console.log(balance.toString());
console.log(balance.toString().length);     //3
console.log(balance.toFixed(2));      //100.00

const otherNumber = 23.34535
console.log(otherNumber.toPrecision(3));     //23.9
const otherNumber1 = 123.84535
console.log(otherNumber1.toPrecision(3));     //124
const otherNumber2 = 1234.84535
console.log(otherNumber2.toPrecision(3));     //1.23e+3
const hundreds = 1000000
console.log(hundreds.toLocaleString());    //1,000,000
console.log(hundreds.toLocaleString('en-IN'));    //10,00,000

//++++++++++++++++++++++++ Maths ++++++++++++++++++++++++++++++
console.log(Math);           //object
console.log(Math.abs(-4));    //absolute value
console.log(Math.round(4.6));    //round-off -> 5
console.log(Math.ceil(4.3));     //ceiling value-5
console.log(Math.floor(4.3));   //floor value-4
console.log(Math.sqrt(25));        //5
console.log(Math.pow(2,3));      //2*2*2
console.log(Math.min(2,6,4,7,1));   //1
console.log(Math.max(23,65,23,13,67));   //67

console.log(Math.random());     //random number between 0 and 1
console.log(Math.floor(Math.random()*10)+1);  

const min = 10
const max = 20
console.log(Math.floor(Math.random()*(max - min + 1)) + min);    //to define range where you want output