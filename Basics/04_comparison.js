console.log(2>1);    //true
console.log(2>=1);   //true
console.log(2==1);    //false

console.log("2">1);   //true- automatically converted to number
console.log("02">1);   //true

//avoid these comparisons
console.log(null>0);     //false
console.log(null==0);     //false
console.log(null>=0);     //true

console.log(undefined==0);     //false
console.log(undefined>0);       //false
console.log(undefined<0);       //false

// === -> compares without converting
console.log(5 === 5); // true
console.log('hello' === 'hello'); // true
console.log(5 === '5'); // false
console.log(true === 1); // false
console.log(null === undefined); // false
console.log(NaN === NaN); // false (special case)  //NaN is the only value in JavaScript that is not equal to itself
