//The setInterval() method, repeatedly calls a function or executes a code snippet, with a fixed time delay between each call.
//const clock = document.querySelector('#clock);  //we can use both
//The getElementById() method of the Document interface returns an Element object representing the element whose id property matches the specified string.
const clock = document.getElementById('clock');
setInterval(function () {  
    let date = new Date();
    clock.innerHTML = date.toLocaleTimeString();
}, 1000);

