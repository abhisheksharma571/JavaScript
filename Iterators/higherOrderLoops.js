// for  of
const arr = [1,2,3,4,5]
for (const i of arr) {
    console.log(i);
}

const greetings = "Hello World"
for (const greet of greetings) {
    console.log(`Each char is ${greet}`);
}

//Maps
const map = new Map()
map.set('IN',"India")
map.set('USA',"United States of America")
map.set('Fr',"France")
map.set('IN',"India")     //takes unique value

console.log(map);
for (const [key,value] of map) {
    console.log(key, ':-',value);
}

//Object is not iterable through for of loop
// const myObject = {
//     'game1':'NFS',
//     'game20':'Spiderman'
// }
// for (const [key,value] of myObject) {
//     console.log(key, ':-', value);
// }

console.log("For in loop started");
//For in loop
const myObj = {
    js:'javascript',
    cpp:'c++',
    rb:'ruby',
    swift:'swift by apple'
}
for (const key in myObj) {
   console.log(`${key} shortcut is for ${myObj[key]}`);
}

const programming = ["js","rb","py","java","cpp"]
for (const key in programming) {
    console.log(programming[key]);
}

//not iterable through for in loop
// const map2 = new Map2()
// map2.set('IN',"India")
// map2.set('USA',"United States of America")
// map2.set('Fr',"France")
// map2.set('IN',"India") 

// for (const key in map2) {
//    console.log(key);
// }

console.log("For each loop started");
//for each loop
const coding = ["js","ruby","java","python","cpp"]
// coding.forEach( function (item) {
//     console.log(item);
// });

//OR
coding.forEach( (item) => {
    console.log(item);
});

//OR
// function printMe(item){
//     console.log(item);
// }
// coding.forEach(printMe)


coding.forEach((item,index,arr) => {
    console.log(item,index,arr);
})


const myCoding = [
    {
        languageName:"javascript",
        languageFileName:"js"
    },
    {
        languageName:"java",
        languageFileName:"java"
    },
    {
        languageName:"python",
        languageFileName:"py"
    }
]
myCoding.forEach( (item) => {

    console.log(item.languageName);
})
