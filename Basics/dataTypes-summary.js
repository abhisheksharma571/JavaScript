// # Primitive
// 7 types: String, Number, Boolean, null, undefined, Symbol, BigInt
const score = 100
const scoreValue = 100.3
const isLoggedIn = false
const outsideTemp = null
let userEmail;        //undefined
const id = Symbol('123')
const anotherId = Symbol('123')

console.log(id===anotherId)     //false

const bigNumber = 13456752367563263n        //bigint

// # Reference(Non-primitive)
// Array, Objects, Functions
const heros = ["Shaktiman","Nagraj","Doga"]      //array
let myObj = {            //object
    name: "Abhishek",
    age: 22
}

const myFunction = function(){       //function
    console.log("Hello World");
}

console.log(typeof bigNumber);       //bigint
console.log(typeof outsideTemp);     //object
console.log(typeof myFunction);      //function
console.log(typeof heros);           //object
console.log(typeof myObj);           //object


//+++++++++++++++++++++++++++++++++++++ Memory +++++++++++++++++++++++++++++++++++++++++++

// Stack(Primitive), Heap(Non-Primitive)
let myYoutubeName = "Abhisheksharmadotcom"
let anotherName = myYoutubeName
anotherName = "chaiaurcode"
console.log(anotherName);     //chaiaurcode
console.log(myYoutubeName);    //Abhisheksharmadotcom


let userOne = {
    email: "user@google.com",
    upi: "user@ybl"
}
let userTwo = userOne
userTwo.email = "abhishek@google.com"

//changes in both(heap memory)
console.log(userOne.email)       //abhishek@google.com
console.log(userTwo.email)       //abhishek@google.com