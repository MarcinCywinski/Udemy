const buttonJS = document.querySelector('.js');

buttonJS.addEventListener('click', createDiv);

function createDiv(){
    const divItem = document.createElement('div');
    // divItem.id = "black";
    // divItem.className = "box";
    divItem.classList.add("box");
    // divItem.setAttribute("class", "box"); 
    document.body.appendChild(divItem);
}

