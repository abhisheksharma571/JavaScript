const promiseOne = new Promise(function(resolve, reject){
    //Do an async task
    // DB calls, cryptography, network
    setTimeout(function(){
        console.log('Async task is compelete');
        resolve()
    }, 1000)
})

promiseOne.then(function(){
    console.log("Promise consumed");
})

new Promise(function(resolve, reject){
    setTimeout(function(){
        console.log("Async task 2");
        resolve()
    }, 1000)

}).then(function(){
    console.log("Async 2 resolved");
})

const promiseThree = new Promise(function(resolve, reject){
    setTimeout(function(){
        resolve({username: "Chai", email: "chai@example.com"})
    }, 1000)
})

promiseThree.then(function(user){
    console.log(user);
})

const promiseFour = new Promise(function(resolve, reject){
    setTimeout(function(){
        let error = true
        if (!error) {
            resolve({username: "hitesh", password: "123"})
        } else {
            reject('ERROR: Something went wrong')
        }
    }, 1000)
})

 promiseFour
 .then((user) => {
    console.log(user);
    return user.username
}).then((username) => {
    console.log(username);
}).catch(function(error){
    console.log(error);
}).finally(() => console.log("The promise is either resolved or rejected"))



const promiseFive = new Promise(function(resolve, reject){
    setTimeout(function(){
        let error = true
        if (!error) {
            resolve({username: "javascript", password: "123"})
        } else {
            reject('ERROR: JS went wrong')
        }
    }, 1000)
});

async function consumePromiseFive(){
    try {
        const response = await promiseFive
        console.log(response);
    } catch (error) {
        console.log(error);
    }
}

consumePromiseFive()

// async function getAllUsers(){
//     try {
//         const response = await fetch('https://jsonplaceholder.typicode.com/users')

//         const data = await response.json()
//         console.log(data);
//     } catch (error) {
//         console.log("E: ", error);
//     }
// }

//getAllUsers()

fetch('https://api.github.com/users/hiteshchoudhary')
.then((response) => {
    return response.json()
})
.then((data) => {
    console.log(data);
})
.catch((error) => console.log(error))



// promise.all

const f1Promise = new Promise((resolve, reject) => {
    setTimeout(()=>{
        if(Math.random() > 0.5){
            resolve("f1 Friend : Hey I am in for Goa")
        } else {
            reject("f1 Friend : Sorry, I don't")
        }
    },3000)
})
const f2Promise = new Promise((resolve, reject) => {
    setTimeout(()=>{
        if(Math.random() > 0.5){
            resolve("f2 Friend : Hey I am in for Goa")
        } else {
            reject("f2 Friend : Sorry, I don't")
        }
    },3000)
})
const f3Promise = new Promise((resolve, reject) => {
    setTimeout(()=>{
        if(Math.random() > 0.5){
            resolve("f3 Friend : Hey I am in for Goa")
        } else {
            reject("f3 Friend : Sorry, I don't")
        }
    },3000)
})

Promise.all([f1Promise, f2Promise, f3Promise])
.then((msg)=> {
    console.log(msg);
    console.log("Yayy! 😀");
})
.catch((msg)=> {
    console.log(msg);
    console.log("Yaar band karo Goa jane ka plan 🥲");
})



// promise.any

const gf1Promise = new Promise((resolve, reject) => {
    setTimeout(()=>{
        if(Math.random() > 0.5){
            resolve("gf1 : Hey I will go for dinner!");
        } else {
            reject("gf1 : Phone is unreachable")
        }
    },3000)
})
const gf2Promise = new Promise((resolve, reject) => {
    setTimeout(()=>{
        if(Math.random() > 0.5){
            resolve("gf2 : Hey I will go for dinner!")
        } else {
            reject("gf2 : Phone is unreachable")
        }
    },3000)
})
const gf3Promise = new Promise((resolve, reject) => {
    setTimeout(()=>{
        if(Math.random() > 0.5){
            resolve("gf3 : Hey I will go for dinner!")
        } else {
            reject("gf3 : Phone is unreachable")
        }
    },3000)
})

Promise.any([gf1Promise, gf2Promise, gf3Promise])
.then((msg)=> {
    console.log(msg);
    console.log("Yayy! 😀");
})
.catch((msg)=> {
    console.log(msg);
    console.log("Uff, ab kaise katega valentine day 🥲");
})

