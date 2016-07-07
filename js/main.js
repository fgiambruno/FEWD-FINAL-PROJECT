// $(document).ready(function(){       
//    var scroll_start = 0;
//    var startchange = $('.nav');
//    var offset = startchange.offset();
//    $(document).scroll(function() { 
//       scroll_start = $(this).scrollTop();
//       if(scroll_start > offset.top) {
//           $('.nav').css('background-color', 'rgba(34,34,34,0.9)');
//        } else {
//           $('.nav').css('background-color', 'transparent');
//        }
//    });
// });

$(window).scroll(function() {    
    var scroll = $(window).scrollTop();

    if (scroll >= 500) {
        $(".nav").addClass("scrolling");
    } else {
        $(".nav").removeClass("scrolling");
    }
});
