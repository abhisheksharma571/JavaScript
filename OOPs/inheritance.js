class User {
    constructor(username){
        this.username = username
    }

    logMe(){
        console.log(`USERNAME is ${this.username}`);
    }
}

class Teacher extends User{
    constructor(username, email, password){
        super(username)      // Call the Person constructor
        this.email = email
        this.password = password
    }

    addCourse(){
        console.log(`A new course was added by ${this.username}`);
    }
}

const chai = new Teacher("chai", "chai@teacher.com", "123")

chai.logMe()
const masalaChai = new User("masalaChai")

masalaChai.logMe()

console.log(chai instanceof User);   //true


/*
Here are the main uses of the super keyword -

1.Calling the parent class constructor  
2.Accessing parent class properties and methods
class Vehicle {
  constructor(make, model) {
    this.make = make;
    this.model = model;
  }

  startEngine() {
    console.log("Engine started");
  }
}

class Car extends Vehicle {
  drive() {
    console.log("Driving...");
    super.startEngine(); // Call the parent class's startEngine method
  }
}

const car = new Car("Toyota", "Camry");
car.drive(); // Logs "Driving..." and "Engine started"

3.Overriding parent class methods
class Animal {
  makeSound() {
    console.log("Generic animal sound");
  }
}

class Dog extends Animal {
  makeSound() {
    super.makeSound(); // Call the parent class's makeSound method
    console.log("Woof!");
  }
}

const dog = new Dog();
dog.makeSound(); // Logs "Generic animal sound" and "Woof!"
*/ 