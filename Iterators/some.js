//The some method tests whether at least one element in the array passes the test implemented by the provided function.
const numbers = [1, 2, 3, 4, 5];

const hasEvenNumber = numbers.some(function(number) {
    return number % 2 === 0;
});

console.log(hasEvenNumber); // true
