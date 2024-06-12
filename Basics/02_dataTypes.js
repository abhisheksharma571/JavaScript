"use strict";    // treat all JS code as newer version

//alert(3+3)     //we are using nodejs, not browser

console.log(3
    +3)     //code readibility should be high
console.log("Abhishek")

let name = "Abhishek"     //string
let age = 18              //number
let isLoggedIn = false    //boolean

//number => 2 to power 53
let int = 42;
let float = 3.14;
let notANumber = NaN;
let infinity = Infinity;
let negativeInfinity = -Infinity;
console.log([typeof(int), typeof(float), typeof(notANumber), typeof(infinity), typeof(negativeInfinity)]);  //[ 'number', 'number', 'number', 'number', 'number' ]

//bigint 
//string => ""  : Can be defined using single quotes ('), double quotes ("), or backticks (`) for template literals.
let singleQuoteStr = 'Hello';
let doubleQuoteStr = "World";
let templateLiteral = `Hello, ${doubleQuoteStr}!`;
console.log([singleQuoteStr, doubleQuoteStr, templateLiteral]);  //[ 'Hello', 'World', 'Hello, World!' ]

//boolean => true/false
//null => standalone value
//undefined => value not assigned
//symbol => used to find uniqueness
let sym1 = Symbol('description');
let sym2 = Symbol('description');
console.log(sym1 === sym2); // false



console.log(typeof "Abhishek");  //string
console.log(typeof age);         //number
console.log(typeof null)         //object
console.log(typeof undefined)    //undefined
