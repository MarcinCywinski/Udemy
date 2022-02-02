// window.addEventListener('scroll', function(){
//     console.log("Skrolujesz!")
// })

// document.addEventListener('scroll', function(){
//     console.log('Skrolujesz o ' + window.scrollY + 'px')
// })

function showScrollSize(){
    console.log("Skrolujesz o:" + window.scrollY + "px")
}

window.addEventListener('scroll', showScrollSize)

const spanResult = document.querySelector('span');

document.addEventListener('scroll', function(){
    spanResult.textContent = window.scrollY
})