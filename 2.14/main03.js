$(document).on('scroll', function(){
    if($(this).scrollTop() > 200){
    $('div.info').addClass('active');}
    else {$('div.info').removeClass('active');}
    $('div.info').text("obecna pozycja scrolla: " + $(document).scrollTop().toFixed() + " wow");
})




