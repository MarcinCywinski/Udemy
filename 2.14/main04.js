// JQUERY

// function changeText(){
//     // console.log('bgar');
//     const wielkoscSkrola = $(this).scrollTop().toFixed();
//     // console.log(wielkoscSkrola);

//     const wysokoscSekcji1 = $('.sekcja1').height();
//     const wysokoscSekcji2 = $('.sekcja2').height();
//     const wysokoscSekcji3 = $('.sekcja3').height();
//     const wysokoscSekcji4 = $('.sekcja4').height();

//     const odlegloscOdPoczatkuSekcji1 = $('.sekcja1').offset().top;
//     const odlegloscOdPoczatkuSekcji2 = $('.sekcja2').offset().top;
//     const odlegloscOdPoczatkuSekcji3 = $('.sekcja3').offset().top;
//     const odlegloscOdPoczatkuSekcji4 = $('.sekcja4').offset().top;

//     if(wielkoscSkrola < wysokoscSekcji1){
//         $('div.info').text('sekcja 1')
//     } else if (wielkoscSkrola < wysokoscSekcji2 + odlegloscOdPoczatkuSekcji2){
//         $('div.info').text('sekcja 2')
//     } else if (wielkoscSkrola < wysokoscSekcji3 + odlegloscOdPoczatkuSekcji3){
//         $('div.info').text('sekcja 3')
//     } else{
//         $('div.info').text('sekcja 4')
//     }
// }

// $(document).on('scroll', changeText);

// JS
function changeText(){
    const wielkoscSkrola = window.scrollY;

    const wysokoscSekcji1 = document.querySelector('.sekcja1').clientHeight;
    const wysokoscSekcji2 = document.querySelector('.sekcja2').clientHeight;
    const wysokoscSekcji3 = document.querySelector('.sekcja3').clientHeight;
    const wysokoscSekcji4 = document.querySelector('.sekcja4').clientHeight;

    const odlegloscOdPoczatkuSekcji1 = document.querySelector('.sekcja1').offsetTop;
    const odlegloscOdPoczatkuSekcji2 = document.querySelector('.sekcja2').offsetTop;
    const odlegloscOdPoczatkuSekcji3 = document.querySelector('.sekcja3').offsetTop;
    const odlegloscOdPoczatkuSekcji4 = document.querySelector('.sekcja4').offsetTop;

    if(wielkoscSkrola < wysokoscSekcji1){
        document.querySelector('div.info').textContent = "Sekcja 1"
    } else if (wielkoscSkrola < wysokoscSekcji2 + odlegloscOdPoczatkuSekcji2){
        document.querySelector('div.info').innerText = "Sekcja 2"}
        else if (wielkoscSkrola < wysokoscSekcji3 + odlegloscOdPoczatkuSekcji3){
            document.querySelector('div.info').innerText = "Sekcja 3"}
            else {
                document.querySelector('div.info').innerText = "Sekcja 4"}
        
}
 window.addEventListener('scroll', changeText);

