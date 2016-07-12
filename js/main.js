$(window).scroll(function() {    
    var scroll = $(window).scrollTop();

    if (scroll >= 500) {
        console.log('works')
        $("nav").addClass("scrolling");
    } else {
        $("nav").removeClass("scrolling");
    }
});