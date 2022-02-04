// const spanCounter = document.querySelector('span.counter');
// const clickElement = document.querySelector('body');
// let counter = 0;

// document.body.addEventListener("click", function(){
//     counter ++ ;
//     // document.querySelector('.counter').innerHTML = counter;
//     spanCounter.textContent = counter;
// })

const spaner = document.querySelector('.counter');
const plus = document.querySelector('.plus');
const minus = document.querySelector('.minus');
let counter  = 0;

plus.addEventListener('click', function(){
    counter ++;
    spaner.textContent = counter;
})

minus.addEventListener('click', function(){
    // counter = counter - 1;
    counter --; 
    spaner.textContent = counter;
})

