$(window).scroll(function() {    
    var scroll = $(window).scrollTop();

    if (scroll >= 700) {
        console.log('works')
        $("nav").addClass("scrolling");
    } else {
        $("nav").removeClass("scrolling");
    }
});



$(document).ready(function() {
  var h = $( window ).height();
  $("#topDiv").height(h);
  $(".back").height(h);

});

$(document).ready(function() {
  var h2 = $( window ).height();
  $(".about").height(h2);

});