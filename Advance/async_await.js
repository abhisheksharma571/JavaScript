/*async function getMesssage(){
    return 'hello world'
}

getMesssage().then(result => {
    console.log(result);
})
// console.log(getMesssage());    //Promise { 'hello world' }
*/


//print Hello after wait
console.log("Hello from the beggining");
async function printHelloAfterWait(){
    console.log("First Line");

    let data = new Promise((resolve, reject)=>{
        setTimeout(()=> {
            resolve("Hello World!");
        }, 3000)
    })

    let result = await data    //start waiting for the data promise to be compiled
    console.log(result);
    console.log("Last Line");
}
printHelloAfterWait();
console.log("Hello from the end");
