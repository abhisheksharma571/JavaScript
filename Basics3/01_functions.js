function sayMyName(){
    console.log("A");
    console.log("B");
    console.log("H");
    console.log("I");
}
sayMyName()

function addTwoNumbers(number1, number2){
   console.log(number1 + number2);
}
addTwoNumbers(3,4)

function addTwoNumbers2(number1, number2){
    return number1 + number2
 }
 const result = addTwoNumbers2(4,5)
 console.log(result);

 function loginUserMessage(username){      //function loginUserMessage(username = "sam"){      //bydefault you have assigned value to username
    if(!username){
        console.log("Please enter a user name");
        return
    }
    return `${username} just logged in`
 }

 console.log(loginUserMessage("Abhishek"))

 function calculateCarPrice(val1, val2,...num1){   //... rest operator
    return num1
 }
 console.log(calculateCarPrice(200,300,400,500,600,700));  //[ 400, 500, 600, 700 ]

 const user = {
    username:"abhishek",
    price:"2290"
 }
 function handleObject(anyObject){
    console.log(`Username is ${anyObject.username} an price is ${anyObject.price}`);
 }
 handleObject(user)
//  handleObject({       //direct object can also be passed
//     username:"abhishek",
//     price:"2290"
//  })

const myNewArray = [200,300,400,500]
function returnSecondValue(getArray){
    return getArray[1]
}
console.log(returnSecondValue(myNewArray));
//also you can directly pass array 
 