//Dates
let myDate = new Date()
console.log(myDate);                              //2023-10-18T20:43:54.042Z

console.log(myDate.toString());                 //Wed Oct 18 2023 20:43:54 GMT+0000 (Coordinated Universal Time)
console.log(myDate.toDateString());            //Wed Oct 18 2023
console.log(myDate.toTimeString());
console.log(myDate.toLocaleString());         //10/18/2023, 8:46:15 PM
console.log(typeof myDate);                  //object

let myCreatedDate = new Date(2023, 0, 23, 5, 3)      //months starts from 0 in javaScript
console.log(myCreatedDate.toLocaleString());
console.log(myCreatedDate.toLocaleDateString()); // Locale-specific date
console.log(myCreatedDate.toLocaleTimeString()); // Locale-specific time

let myCreatedDate1 = new Date("01-12-2023")      
console.log(myCreatedDate1.toLocaleString());

let myTimeStamp = Date.now()
//Returns the numeric value corresponding to the current time—the number of milliseconds elapsed since
// January 1, 1970 00:00:00 UTC, with leap seconds ignored.
console.log(myTimeStamp);
console.log(myCreatedDate.getDate());
console.log(Math.floor(Date.now()/1000));

let newDate = new Date()
console.log(newDate);
console.log(newDate.getMonth() + 1);

console.log(newDate.getFullYear()); // 2024
console.log(newDate.getDay());          // 3 (Wednesday, days are 0-indexed with 0 = Sunday)
console.log(newDate.getHours());        // 12
console.log(newDate.getMinutes());      // 0
console.log(newDate.getSeconds());      // 0
console.log(newDate.getMilliseconds()); // 0

newDate.setFullYear(2025);
newDate.setMonth(11);    // December
newDate.setDate(25);     // 25th

console.log(newDate); // Updated date



//defines format
newDate.toLocaleString('default' , {
    weekday: "long",
})

let startDate = new Date('2024-06-10');
let endDate = new Date('2024-06-12');
let differenceInTime = endDate - startDate; // Difference in milliseconds

let differenceInDays = differenceInTime / (1000 * 3600 * 24); // Convert to days
console.log(differenceInDays); // 2
