const marvel_heroes = ["Thor","Ironman","Spiderman"]
const dc_heroes = ["Superman","Flash","Batman"]

// marvel_heroes.push(dc_heroes)        //manipulate in the same array          
// console.log(marvel_heroes);       //[ 'Thor', 'Ironman', 'Spiderman', [ 'Superman', 'Flash', 'Batman' ] ]

const newArr = marvel_heroes.concat(dc_heroes)     //returns new array
console.log(newArr);     //[ 'Thor', 'Ironman', 'Spiderman', 'Superman', 'Flash', 'Batman' ]

const allNewHeroes = [...marvel_heroes,...dc_heroes]    //spread -> concat as many arrays at the same time
console.log(allNewHeroes);       //[ 'Thor', 'Ironman', 'Spiderman', 'Superman', 'Flash', 'Batman' ]

const another_array = [1,2,3,[4,5,6],7,[6,7,[4,5,]]]
const real_another_array = another_array.flat(Infinity)    //Returns a new array with all sub-array elements concatenated into it recursively up to the specified depth.
//depth — The maximum recursion depth
console.log(real_another_array);      //[1, 2, 3, 4, 5, 6, 7, 6, 7, 4, 5]

console.log(Array.isArray("Abhishek"));   //false
console.log(Array.from("Abhishek"));        //[ 'A', 'b', 'h', 'i', 's', 'h', 'e', 'k' ]
console.log(Array.from({name:"Abhishek"}));    //[]

let score1 = 100
let score2 = 200
let score3 = 300
console.log(Array.of(score1,score2,score3));    //[ 100, 200, 300 ]
