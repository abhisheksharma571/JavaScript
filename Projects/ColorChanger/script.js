const buttons = document.querySelectorAll('.button');
const body = document.querySelector('body');
// The querySelector() method returns the first element that matches a CSS selector.
// To return all matches (not only the first), use the querySelectorAll() instead.

buttons.forEach(function (button){
    button.addEventListener('click', function(e){       
        //The addEventListener() method attaches an event handler to the specified element
        //e.target: This refers to the element that triggered the event. In this case, it's the element that was clicked.
        if(e.target.id === 'green'){
            body.style.backgroundColor = e.target.id;
            }
        if(e.target.id === 'red'){
            body.style.backgroundColor = e.target.id;
            }
        if (e.target.id === 'white') {
             body.style.backgroundColor = e.target.id;
            }
        if (e.target.id === 'blue') {
            body.style.backgroundColor = e.target.id;
            }
        if (e.target.id === 'yellow') {
            body.style.backgroundColor = e.target.id;
            }
    });
});


