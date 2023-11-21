//Immediately Invoked Function Expressions (IIFE) - to be unaffected from the pollution of global scope
(function chai(){
    //named IIFE
    console.log(`DB CONNECTED`);
}());     //semicolon needed to stop the context

( (name) => {
    console.log(`DB CONNECTED TWO ${name}`);
})("Abhishek");