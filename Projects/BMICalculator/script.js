const form = document.querySelector('form');
// this usecase will give you empty
// const height = parseInt(document.querySelector('#height').value)

form.addEventListener('submit', function (e) {
  e.preventDefault();
//The preventDefault() method cancels the event if it is cancelable, meaning that the default action that belongs to the event will not occur.
// Clicking on a "Submit" button, prevent it from submitting a form
// Clicking on a link, prevent the link from following the URL

  const height = parseInt(document.querySelector('#height').value);
  const weight = parseInt(document.querySelector('#weight').value);
  const results = document.querySelector('#results');

  if(height === '' || height < 0 || isNaN(height)){
    results.innerHTML = `Pleasegive a valid height ${height}`;
  } else if (weight === ''|| weight < 0 || isNaN(weight)){
    results.innerHTML = `Pleasegive a valid weight ${weight}`;
  } else {
    const bmi = (weight / ((height * height) / 10000)).toFixed(2);
    //show the result
    if(bmi < 18.6){
        results.innerHTML = `<span>${bmi}</span> : You are UnderWeight`;
    } else if (bmi > 24.9){
        results.innerHTML = `<span>${bmi}</span> : You are OverWeight`;
    } else {
        results.innerHTML = `<span>${bmi}</span> : You are in Normal Range`;
    }
  }
});

