const myArr = []
// %DebugPrint(myArr)

//continious, Holey

//SMI (small integer) - more optimised
//packed element
//Double (float, string, function)

const arrTwo = [1,2,3,4,5,6]
//PACKED_SMI_ELEMENTS

arrTwo.push(6.0)
//PACKED_DOUBLE_ELEMENTS

arrTwo.push('7')
//PACKED_ELEMENTS

arrTwo[10] = 11
//HOLEY_ELEMENTS

console.log(arrTwo);
console.log(arrTwo.length);
console.log(arrTwo[9]);

//bound check
//hasOwnProperty(arrTwo,9)
//hasOwnProperty(arrTwo.prototype,10)
//hasOwnProperty(arrTwo.prototype,10)

const arrThree = [1,2,3,4,5]
console.log(arrThree[3]);

//it will downgrade only, not upgrade
//SMI > DOUBLE > PACKED
//H_SMI > H_DOUBLE > H_PACKED

const arrFour = new Array(3)
//just 3 holes. HOLEY_SMI_ELEMENTS
arrFour[0] = '1'   //HOLEY_ELEMENTS
arrFour[1] = '2'   //HOLEY_ELEMENTS
arrFour[2] = '3'   //HOLEY_ELEMENTS

const arrFive = []    //SMI
arrFive.push('1')  //PACKED_ELEMENTS
arrFive.push('2')  //PACKED_ELEMENTS
arrFive.push('3')  //PACKED_ELEMENTS

const arrSix = [1,2,3,4,5]
arrSix.push(NaN)    //PACKED_DOUBLE
arrSix.push(Infinity)    //PACKED_DOUBLE

//for, for-of, forEach - use to prefer internal methods because these are optimised instead of creating your own

