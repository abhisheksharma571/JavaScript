try{
    let obj = undefined
    console.log(obj.name);    //Cannot read properties of undefined (reading 'name')
} catch(err) {
    console.log("Exception handled");
    console.log(err);
    // console.log(err.message);    //Cannot read properties of undefined (reading 'name')
} finally {
    console.log("I will always execute");
}