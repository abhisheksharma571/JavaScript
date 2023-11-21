const descripter = Object.getOwnPropertyDescriptor(Math, "PI")

// console.log(descripter);    //3.14

// console.log(Math.PI);  //3.14
// Math.PI = 5
// console.log(Math.PI);    //3.14 - does not changed

const chai = {
    name: 'ginger chai',
    price: 250,
    isAvailable: true,

    orderChai: function(){
        console.log("chai nhi bni");
    }
}

console.log(Object.getOwnPropertyDescriptor(chai, "name"));

Object.defineProperty(chai, 'name', {
    //writable: false,
    enumerable: true,
    
})

console.log(Object.getOwnPropertyDescriptor(chai, "name"));

for (let [key, value] of Object.entries(chai)) {
    if (typeof value !== 'function') {
        
        console.log(`${key} : ${value}`);
    }
}



/*The Object.getOwnPropertyDescriptor() static method returns an object describing the configuration of a specific property on a given object (that is, one directly present on an object and not in the object's prototype chain).
 The object returned is mutable but mutating it has no effect on the original property's configuration */