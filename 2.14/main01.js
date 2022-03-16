// $('.article button').on('click', function(){
//     $('.modal-wrap').addClass('active');
//     $('.article').addClass('blur');
// })

// $('.hide').on('click', function(){
//     $('.modal-wrap').removeClass('active');
//     $('.article').removeClass('blur');
// })


// $('.article button, span.hide').on('click', function(){
//     $('.modal-wrap').toggleClass('active');
//     $('.article').toggleClass('blur');
// })

const btnModal = document.querySelector('.article button');

btnModal.addEventListener('click', function(){
    document.querySelector('.modal-wrap').classList.add('active');
    document.querySelector('.modal-wrap').classList.add('blur');
})


const btnX = document.querySelector('.hide');

btnX.addEventListener('click', function(){
    this.style.color = "blue";
    document.querySelector('.modal-wrap').classList.remove('active');
    document.querySelector('.modal-wrap').classList.remove('blur');
})



