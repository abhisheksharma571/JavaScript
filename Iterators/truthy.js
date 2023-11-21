//falsy - false, 0,-0,BigInt 0n,"",null,undefined,NaN
//truthy- "0",'false'," ",[],{},function(){}

//const userEmail = "abhi@gmail.com"
const userEmail = ""
if(userEmail){
    console.log("Got user Email");
} else{
    console.log("Don't have user Email");
}

const array = []
if(array.length === 0){
    console.log("Array is empty");
}

const emptyObj = {}
if(Object.keys(emptyObj).length === 0){
    console.log("Object is empty");
}


//Nullish Coalescing Operator (??): null, undefined

let val1;
val1 = 5 ?? 10

console.log(val1);     //5
val1 = null ?? 10

console.log(val1);     //10
val1 = undefined ?? 15

console.log(val1);   //15
val1 = null ?? 3 ?? 6

console.log(val1);

//Ternary Operator
const iceTeaPrice = 100
iceTeaPrice <= 80 ? console.log("less than 80") : console.log("more than 80");