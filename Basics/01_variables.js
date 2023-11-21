const accountId = 53726732
let accountEmail = "Abhisheksharma@gmial.com"
var accountPassword = "23527"
//variables can be declared as both let and var but we use let, because of issue in block scope and functional scope
accountCity = "Patna"     //do not use it 
let accountState;    //undefined

//accountId = 232     
//const can not change
console.log(accountId);

accountEmail = "hfe@hds.com"
accountPassword = "5455454"
accountCity = "Noida"
console.table([accountId,accountEmail,accountPassword,accountCity,accountState])   //print all at a time you mention in the square bracket in the tabular form

