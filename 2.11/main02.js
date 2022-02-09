const leftDiv = document.querySelector('.s1');
const rightDiv = document.querySelector('.s2');

function changeColor() {
    // leftDiv.classList.toggle('red');
    // rightDiv.classList.toggle('red');
    this.classList.toggle('red');
}

leftDiv.addEventListener('click', changeColor);

rightDiv.addEventListener('click', changeColor);


