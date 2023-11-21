let score = "33abc"
let score2 = null
let score3 = undefined

console.log(typeof score)    //string
console.log(typeof(score))   //string

let valueInNumber = Number(score)
console.log(typeof valueInNumber)     //number
console.log(valueInNumber)            //NaN

console.log(typeof score2)    //object
console.log(typeof(score2))   //object

let valueInNumber2 = Number(score2)
console.log(typeof valueInNumber2)     //number
console.log(valueInNumber2)            //0

console.log(typeof score3)    //undefined
console.log(typeof(score3))   //undefined

let valueInNumber3 = Number(score3)
console.log(typeof valueInNumber3)     //number
console.log(valueInNumber3)            //NaN    

//"33" => 33
//"33abc" => NaN
//true => 1; false => 0

let isLoggedIn = 1

let booleanIsLoggedIn = Boolean(isLoggedIn)
console.log(booleanIsLoggedIn)       //true

//"" => false
//"Abhi" => true
//1 => true; 0 => false

let someNUmber = 33
let stringNumber = String(someNUmber)
console.log(stringNumber)       //33
console.log(typeof stringNumber)     //string


//***********************************Operations********************************** 
let value = 3
let negValue = -value
console.log(negValue)       //-3

console.log(2**3)      //2^3

let str1 = "Hello"
let str2 = " Abhishek"
let str3 = str1 + str2
console.log(str3)      //Hell Abhishek

console.log("1"+2)       //12
console.log("1"+2+2);    //122
console.log(1+2+"2");    //32

console.log(true);       //true
console.log(+true);      //1
console.log(+"");        //0

let num1, num2, num3
num1 = num2 = num3 = 2+2

let gameCounter  = 100
gameCounter++;
console.log(gameCounter);         //101

