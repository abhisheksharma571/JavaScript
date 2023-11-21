//print only the originals properties of the array

Array.prototype.extraProperty = "hitesh"

const myArray = [2,3,4,5,6]
// for(let v in myArray){
//     console.log(v);
// }
// output - 0 1 2 3 4 extraProperty

for(let v in myArray){
    if(myArray.hasOwnProperty(v)){    //hasOwnProperty is allocated to only those who are original property of it
        console.log(v);
    }
}
// output - 0 1 2 3 4