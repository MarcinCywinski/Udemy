const btn = document.querySelector('button');
const diver = document.querySelector('.nuknuk')
const jekor = document.querySelector('.closer')
const sq = document.querySelector('.square');

btn.addEventListener('click', function(){
    btn.style.backgroundColor = "red";
    btn.style.color = "white";
    diver.style.display = "block";
    sq.style.width = "50vh";
    sq.style.height = "50vh";
})

const paragraph = document.querySelector('p');

// paragraph.addEventListener('click', function(){
//     paragraph.innerHTML = "<p>Hejkol</p>";
// })

btn.addEventListener('mouseover', function(){
    btn.style.borderRadius = "10px";
})

jekor.addEventListener('click', function(){
    diver.style.display = "none";
    sq.style.width = "15vh";
    sq.style.height = "15vh";
})

let clicksNumber = 0;

btn.addEventListener('click', function(){
    // clicksNumber = clicksNumber + 2;
    clicksNumber++;
    // console.log("klik numer: ", clicksNumber)
    paragraph.innerHTML = (clicksNumber);
})


window.addEventListener('scroll', function(){
    console.log("Skrolujesz biacz!")
}
)
