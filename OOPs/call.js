function SetUsername(username){
    //complex DB calls
    this.username = username    //mai mera this use nhi karunga, mai apka(createUser ka, kyuki hamne usme this ko paas kiya hai) this use karunga
    console.log("called");
}

function createUser(username, email, password){
    SetUsername.call(this, username)     //call method(to hold the reference) - calls a  method of an object, substituting aother object for the current object
   
    this.email = email
    this.password = password
}

const chai = new createUser("chai", "chai@fb.com", "123")
console.log(chai);