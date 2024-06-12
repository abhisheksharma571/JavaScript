//array
const myArr = [0,1,2,3,4,5]
const myHeroes = ["Shaktiman","Naagraj"]

let emptyArray = new Array(); // creates an empty array
const myArr2 = new Array(1,2,3,4,5)

console.log(myArr[0]);
console.log(myArr2);
console.log(myHeroes);

//array methods
console.log(myArr.length);  //to calculate length
myArr.push(6)      //to add element
console.log(myArr);

myArr.pop()    //remove last element
console.log(myArr);

myArr.unshift(9)    //insert at the start but time consuming
console.log(myArr);

myArr.shift()    //remove first element
console.log(myArr);

console.log(myArr.includes(9));    //false 
console.log(myArr.indexOf(9));    //-1

const newArr = myArr.join()    //change into string
console.log(myArr);
console.log(newArr);

//slice or splice
console.log("A ",myArr);      //[ 0, 1, 2, 3, 4, 5 ]
const myn1 = myArr.slice(1,3)    //doesn't manipulate original array and not include last index
console.log(myn1);              //[ 1, 2 ]
console.log("B ", myArr);     //[ 0, 1, 2, 3, 4, 5 ]

const myn2 = myArr.splice(1,3)    //manipulate original array and also include last index
console.log(myn2);          //[ 1, 2, 3 ]
console.log("C ",myArr);    // [ 0, 4, 5 ]
myn2.splice(1,1,23);  // Replaces 1 element at index 1
console.log(myn2);
myn2.splice(2,0,45,67);   // Inserts 45, 67 at index 2
console.log(myn2);    