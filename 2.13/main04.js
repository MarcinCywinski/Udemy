// $(".burger").on("click", function(){
//     $(".fa-solid, aside").toggleClass("navShow");
//     $(".wrapper").toggleClass("show");
// })

// const burger = document.querySelector('.burger');
// const iconBurger = document.querySelector('.fa-bars');
// const iconX = document.querySelector('.fa-xmark');
// const column = document.querySelector('aside');
// const wrapper = document.querySelector('.wrapper');

// burger.addEventListener('click', function(){
//     iconBurger.classList.toggle('show');
//     iconX.classList.toggle('show');
//     iconX.style.color = "red";
//     column.classList.toggle('navShow');
//     wrapper.classList.toggle('show');
// })

const burger = document.querySelector(".burger");
const activeElement = document.querySelectorAll(".active");

burger.addEventListener("click", function(){
for(let i = 0; i < activeElement.length; i++) {
    activeElement[i].classList.toggle("show")
    activeElement[i].classList.toggle("navShow")
}
})
