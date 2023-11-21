let a = 300
var c = 200
if(true){
    let a = 10
    const b = 3
    var c = 5     //var affects value globally
    console.log("Inner a : ",a);
}
console.log(a);
// console.log(b);
console.log(c);     //5

function one(){
    const username = "Abhishek"
    function two(){
        const website = "YouTube"
        console.log(username);
    }
    //console.log(website);
    two()
}
one()

if(true){
    const username = "hitesh"
    if(username === "hitesh"){
        const website = "YouTube"
        console.log(username + website);
    }
    //console.log(website);
}
//console.log(username);

//****************************************************************************************** */
console.log(addOne(6))
function addOne(num){
    return num + 1
}

//console.log(addTwo(6))    //can not use before declaration in this case
const addTwo = function(num){
    return num + 2
}
addTwo(6)