const btnIncrease = document.querySelector('.bigger');
const btnDecrese = document.querySelector('.smaller');
const text = document.querySelector('p');

let textSize = 16;

btnIncrease.addEventListener('click', textIncrease);

function textIncrease(){ 
    // console.log('klik');
    textSize++;
    text.style.fontSize = textSize + "px";
}


btnDecrese.addEventListener('click', textDecrese);

function textDecrese(){
    textSize--;
    text.style.fontSize = textSize + "px";
}