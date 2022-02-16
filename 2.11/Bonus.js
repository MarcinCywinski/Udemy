// const body = document.querySelector('body');
// const orange = document.querySelector('.orange');
// const green = document.querySelector('.green');
// const blue = document.querySelector('.blue');
// const yellow = document.querySelector('.yellow');
// const red = document.querySelector('.red');

// orange.addEventListener('click', bOrange);

// function bOrange(){
//     body.style.backgroundColor = "orange";
// }

// green.addEventListener('click', bGreen);

// function bGreen(){
//     body.style.backgroundColor = "green";
// }

// blue.addEventListener('click', bBlue);

// function bBlue(){
//     body.style.backgroundColor = "blue";
// }

// yellow.addEventListener('click', byellow);

// function byellow(){
//     document.body.classList.add('yellow');
// }

// red.addEventListener('click', bred);

// function bred(){
//     document.body.className = "red";
// }

const items = document.querySelectorAll('div');

items.forEach(function(item){
    item.addEventListener('click', changeColor);
})

function changeColor(){
    document.body.className = this.className;
}


