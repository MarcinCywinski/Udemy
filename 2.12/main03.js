// $('.interface').on("click", function(){
//     // console.log($(this).attr("class"));
//     if($(this).hasClass("orange")){
//         console.log("True")
//     } else {
//         console.log("False")
//     }

//     if (this.classList.contains("green")){
//         console.log("TrueGreen")
//     } else {
//         console.log("Run from Putin")
//     }
// })


// $('.interface').on("click", function(){
// if($(this).hasClass("green")){
//     // $('body').css("background-color", "green");
//     $('body').css({
//         "background-color": "green",
//         "color" : "purple"})
// }
// })

// if($(this).hasClass("green")){
//     $('body').attr("class", "green")}

$('.interface').on("click", function(){
    if($(this).hasClass("orange")){
        $('body').toggleClass('orange')
    }

    if($(this).hasClass("green")){
        $('body').toggleClass('green')
    }

    if($(this).hasClass("increase")){
        $('.text').animate({
            "font-size" : "+=2"
        }, 200)
    }

    if($(this).hasClass("move")){
        $('.text').animate({
            "letter-spacing" : "+=2"
        }, 200)
    }
    
})