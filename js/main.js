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

// $(.movingText).scroll(function()
// var settings = {
//   // configuration for the mouseenter event
//   animMouseenter    : {
//     'mText' : {speed : 350, easing : 'easeOutExpo', delay : 140, dir : 1},
//     'sText' : {speed : 350, easing : 'easeOutExpo', delay : 0, dir : 1},
//     'icon'  : {speed : 350, easing : 'easeOutExpo', delay : 280, dir : 1}
//   },
// $(document).ready(function() {
//   var w = $( window ).width();
//   $("#topDiv").width(w);
//   $(".back").width(w);

// });