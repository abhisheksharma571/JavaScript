const name = "Abhishek"
const repoCount = 50
console.log(name+repoCount+" Value");      //outdated
console.log(`Hello my name is ${name} and my repo count is ${repoCount}`);

const gameName = new String('Abhishek')
console.log(gameName);
console.log(gameName[0]);      //0th key
console.log(gameName.__proto__);     //prototype - object

console.log(gameName.length);   //calculate length
console.log(gameName.toUpperCase());      //convert into upper case - but original value is not changed
console.log(gameName.charAt(2));          //what present at 2nd index
console.log(gameName.indexOf('e'));        //e present at what index

const newString = gameName.substring(0,4);    //sub string
console.log(newString);

const anotherString = gameName.slice(-7,4);
console.log(anotherString);

const newString1 = "     abhishek    ";
console.log(newString1);
console.log(newString1.trim());       //removes starting and ending spaces and line-terminator(new line)

const url = "https://abhishek.com/abhishek%20sharma"
console.log(url.replace('%20','-'));    //replaces %20 from -

console.log(url.includes('abhishek'));     //includes or not

const str = "Quick brown fox jumps over the lazy dog"
console.log(str.split(' '))     //separates based on what you passed     //will take (separator)/(separator,limit)

