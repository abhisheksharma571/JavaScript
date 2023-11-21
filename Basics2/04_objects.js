const tinderUser = new Object()    //singleton object
tinderUser.Id = "1223xcv"
tinderUser.name = "Sameer"
tinderUser.isLoggedIn = false

console.log(tinderUser);       //{ Id: '1223xcv', name: 'Sameer', isLoggedIn: false }

const regularUser = {
    email:"abhishek@gmail.com",
    fullname:{
        userfullname:{
            firstname:"abhishek",
            lastname:"sharma"
        }
    }
}

console.log(regularUser.fullname.userfullname.firstname);   //abhishek
console.log(regularUser.fullname);         //{ userfullname: { firstname: 'abhishek', lastname: 'sharma' } }

const obj1 = {1:"a",2:"b"}
const obj2 = {3:"c",4:"d"}
// const obj3 = {obj1, obj2}
// console.log(obj3);       //{ obj1: { '1': 'a', '2': 'b' }, obj2: { '3': 'c', '4': 'd' } }

// const obj3 = Object.assign({}, obj1, obj2)
// console.log(obj3);        //{ '1': 'a', '2': 'b', '3': 'c', '4': 'd' }

const obj3 = {...obj1, ...obj2}
console.log(obj3);                 //{ '1': 'a', '2': 'b', '3': 'c', '4': 'd' }

const users = [    //object of array
    {
        id:1,
        email:"abhi@gmail.com"
    },
    {
        id:2,
        email:"abhi@gmail.com"
    },
    {
        id:3,
        email:"abhi@gmail.com"
    }
]

console.log(users[1].email);

console.log(tinderUser);                        //{ Id: '1223xcv', name: 'Sameer', isLoggedIn: false }
console.log(Object.keys(tinderUser));          //[ 'Id', 'name', 'isLoggedIn' ]
console.log(Object.values(tinderUser));      //[ '1223xcv', 'Sameer', false ]
console.log(Object.entries(tinderUser));      //[ [ 'Id', '1223xcv' ], [ 'name', 'Sameer' ], [ 'isLoggedIn', false ] ]
console.log(tinderUser.hasOwnProperty('isLogged'));   //available or not

const course = {
    coursename:"Js in Hindi",
    price:"999",
    courseInstructor:"Hitesh"
}

//course.courseInstructor
const {courseInstructor:instructor} = course
console.log(instructor);   //Hitesh

// {     //JSON
//     "name":"abhishek",
//     "coursename":"js in hindi",
//     "price":"free"
// }
