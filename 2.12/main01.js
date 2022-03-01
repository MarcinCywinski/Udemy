const buttonJS = document.querySelector('.js');

buttonJS.addEventListener('click', createDiv);

function createDiv(){
    const divItem = document.createElement('div');
    divItem.classList.add('box');
    document.body.appendChild(divItem);
}

// jQuery('.jq')
$('.jq').on('click', function(){
    $('body').append('<div class="box">')
})