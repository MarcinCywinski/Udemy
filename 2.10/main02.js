console.log(23 + 34);

let hello = "Witaj";

console.log(hello);

/*
A
B
C
X
*/  

let aa = "Helleburg";
console.log(typeof aa);

let male = true;
console.log(male, typeof male);

let onlyDeclare;
console.log(typeof onlyDeclare);

let grip = null;
console.log(typeof grip);

let ab = document.querySelector(".description");
console.log(ab);

let ac = document.getElementById("text");
console.log(ac);

function fuck(){
document.querySelector(".description").style.fontSize = "2em";
document.querySelector(".description").style.transition = ".3s";
}

function fuck1(){
    document.querySelector(".description").style.cursor = "pointer";
}


let guzik = document.querySelector("p:last-of-type");

function btn(){
    guzik.style.border = "2px solid black";
    guzik.style.textAlign = "center";
}

console.log(window);