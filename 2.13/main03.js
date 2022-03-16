const burger = document.querySelector('.burger');
const iconBurger = document.querySelector('.fa-bars');
const iconX = document.querySelector('.fa-xmark');
const column = document.querySelector('aside');

burger.addEventListener('click', function(){
    iconBurger.classList.toggle('show');
    iconX.classList.toggle('show');
    iconX.style.color = "red";
    column.classList.toggle('navShow');
})