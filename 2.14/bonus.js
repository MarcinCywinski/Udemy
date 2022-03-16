const $doc = $(document);
const $header = $('header');
const $main = $('main');

$doc.on("scroll", function(){
    const scrollPos = $doc.scrollTop();

    // Gdzie jest dany element od początku strony?
    const sectionOffset = $main.offset().top;

    // Jaka jest wysokość elementu
    const headerHeight = $header.outerHeight();
    $header.css({
        // 'opacity': 1 - scrollPos/headerHeight,
        'filter': 'grayscale(' + 2 * scrollPos/headerHeight + ')' 
    })
})