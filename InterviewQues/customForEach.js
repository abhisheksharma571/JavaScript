//Beginner level
// Array.prototype.customForEachOne = function (callback){
//     for(let i=0;i<this.length;i++){
//         callback(this[i], i, this)
//     }
// }

//Advance level
Array.prototype.forEachTwo = function(callback, thiscontext){
    if(typeof callback != 'function'){
        throw 'not a function'
    }
    const length = this.length
 // we can also for loop
    let i=0;
    while(i<length){
        if(this.hasOwnProperty(i)){
            callback.call(thiscontext, this[i], i, this)
        }
        i++
    }
    console.log();
}
//The call method is used to set the this context explicitly to thiscontext
