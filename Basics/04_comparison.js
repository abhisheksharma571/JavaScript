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
console.log("2"===2);      //false