const user = {
    username:"abhishek",
    price:999,
    welcomeMsg:function(){
        console.log(`${this.username}, welcome to website`);  //this is used to refer current context
    }
}

user.welcomeMsg()
user.username = "Sam"
user.welcomeMsg()

// function chai(){
//     let username = "Hitesh"
//     console.log(this.username);   //we can not use this in functions
// }
// chai()

// const chai = function(){
//     let username = "Hitesh"
//     console.log(this.username);
// }
// chai()

// const chai = () => {       //arrow function
//     let username = "Hitesh"
//     console.log(this.username);
// }
// chai()

// const addTwo = (num1, num2) => {
//     return num1 + num2
// }

//implicit return
// const addTwo = (num1, num2) => num1 + num2
const addTwo = (num1, num2) => (num1 + num2)
console.log(addTwo(3,4));

const userName = () => ({username:"abhishek"})     //return object
console.log(userName());



