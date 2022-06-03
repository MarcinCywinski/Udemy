const btn = document.querySelector("button");
const ul = document.querySelector("ul");
let number = 1;

btn.addEventListener('click', function(){
    const newLi = document.createElement('li');
    newLi.textContent = number;
    if(number%3 == 0){
        newLi.classList.add("big");
    }
    number += 2;
    ul.appendChild(newLi);
})