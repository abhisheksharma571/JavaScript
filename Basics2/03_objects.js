// singleton
//Object.create

//object literals
const mySymb = Symbol("key1")

const jsUser = {
    name: "Abhishek",
    "full name":"Abhishek sharma",
    [mySymb]:"myKey1",
    age: 18,
    location: "Jaipur",
    email:"abhishek@gmail.com",
    isLoggedIn:false,
    lastLoggedInDays:["Monday","Saturday"]
}

console.log(jsUser.email);
console.log(jsUser["email"]);
console.log(jsUser["full name"]);     //can't access through dot operator
console.log(jsUser[mySymb]);

jsUser.email = "abhishek@gpt.com"   //changing value
console.log(jsUser["email"]);
// Object.freeze(jsUser)
// jsUser.email = "abhishek@google.com"    //doesn't chamge values because we have freezed object
// console.log(jsUser["email"]);

jsUser.greeting = function(){
    console.log("Hello Js User");
}
jsUser.greeting2 = function(){
    console.log(`Hello Js User, ${this.name}`);
}
console.log(jsUser.greeting());        //Hello Js User
console.log(jsUser.greeting2());       //Hello Js User, ABhishek
