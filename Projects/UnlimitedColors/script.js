//generate a random color

const randomColor = function(){
    const hex = '0123456789ABCDEF';
    let color = '#';
    for(let i=0;i<6;i++){   //because we have 6 characters in hex color
        color += hex[Math.floor(Math.random() * 16)];   //generate random number between 0 to 16 and get converted into hex
    }
    return color;
};
  let intervalId;
  const startChangingColor = function(){
    if(!intervalId){
        intervalId = setInterval(changeBgColor, 1000);
    }
    function changeBgColor(){
        document.body.style.backgroundColor = randomColor();
    }
  };
  document.querySelector('#start').addEventListener('click', startChangingColor);

const stopChangingColor = function(){
    clearInterval(intervalId);
    intervalId = null;
};
//The global clearInterval() method cancels a timed, repeating action which was previously established by a call to setInterval(). 
document.querySelector('#stop').addEventListener('click', stopChangingColor);
  
  