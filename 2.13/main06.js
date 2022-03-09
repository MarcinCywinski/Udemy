const arrow = document.querySelector(".arrow");
const navi = document.querySelector("nav");

arrow.addEventListener("click", function(){
    arrow.classList.toggle('change');
    navi.classList.toggle('show');
})