const square = document.createElement("div");
document.body.appendChild(square);


let grow = true;
let size = 100; 
square.style.width = size + "px";
square.style.height = size + "px";

// square.style.backgroundColor = "red";

// Maksymalna wielkość kwadratu
// window.innerWidth *0.5

window.addEventListener("scroll", function(){
    if(size >= window.innerHeight * 0.75){
    grow = false;
} else if(size == 0){
    grow = true;
}
if(grow == true){
    size += 5
    square.style.width = size + "px";
    square.style.height = size + "px";
} else {
    size -= 5
    square.style.width = size + "px";
    square.style.height = size + "px";
} 
})