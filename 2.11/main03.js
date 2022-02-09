const btn = document.querySelector('button');
const sqr = document.querySelector('.square');
const sqrM = document.querySelector('.s2');
let start = 0;
let startM = 0

btn.addEventListener('click', nuknuk);

function nuknuk(){
    start += 10;
    if(start === 90){
        sqr.style.backgroundColor = "green";
        sqr.style.borderRadius = "25%";
    } else if (start === 180){
        sqr.style.backgroundColor = "red";
        sqr.style.borderRadius = "30%";
    } else if (start === 360){
        sqr.style.backgroundColor = "black";
    };
    sqr.style.transform = `rotate(${start}deg)`;
}

btn.addEventListener('click', nuknukM);

function nuknukM(){
    startM += 20;
    if(startM === 90){
        sqrM.style.backgroundColor = "green";
        sqrM.style.borderRadius = "25%";
    } else if (startM === 180){
        sqrM.style.backgroundColor = "red";
        sqrM.style.borderRadius = "30%";
    } else if (startM === 360){
        sqrM.style.backgroundColor = "black";
    };
    sqrM.style.transform = `rotate(${startM}deg)`;
}
