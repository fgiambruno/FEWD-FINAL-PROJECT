$(window).scroll(function() {    
    var scroll = $(window).scrollTop();

    $(".tabs").children().removeClass("activeTabs");
    if (scroll >= 2200) {
        $("nav").addClass("scrolling");
        $("#voluteerItem").children().addClass("activeTabs");
    }else {
      if (scroll >= 1500) {
        $("nav").addClass("scrolling");
        $("#aboutUsItem").children().addClass("activeTabs");
    } else {
      if (scroll >= 700) {
        $("nav").addClass("scrolling");
        $("#adoptItem").children().addClass("activeTabs");
      } else {
        $("nav").removeClass("scrolling");
      }
    }  
  }
     
    
});

var tickerIterations = 0;
var currentTickerIteration = 0;

$(document).ready(function() {
  var h = $( window ).height();
  $("#topDiv").height(h);
  $(".back").height(h);
   var h2 = $( window ).height();
  $(".about").height(h2);
  createTicker();
  $("#thanksMessage").hide();
   $("#donateButton").hover(function() {
      $("#thanksMessage").show();
      console.log("hover on donate button");
    },
      function() {
      $("#thanksMessage").hide();  
    });
   $(".tabs").click(function() {
      $(".tabs").children().removeClass("activeTabs");
      $(this).children().addClass("activeTabs");
   });
});




function createTicker(){
  if (typeof $('#ticker-area').attr('alt') != 'undefined'){
    tickerIterations = $('#ticker-area').attr('alt');
  }
  // put all list elements within #ticker-area into array
  var tickerLIs = $("#ticker-area ul").children();
  tickerItems = new Array();
  tickerLIs.each(function(el) {
    tickerItems.push( jQuery(this).html() );
  });
  i = 0
  rotateTicker();
}

function rotateTicker(){
  if( i == tickerItems.length ){
    i = 0;
    if( tickerIterations > 0 ){
      console.log( "tickerIterations: " +tickerIterations );
      currentTickerIteration++;
      console.log( "currentTickerIteration: " + currentTickerIteration );
      if( currentTickerIteration >= tickerIterations ){
        console.log( "Done iterating" );
        return false;
      }
    }
  }
  tickerText = tickerItems[i];
  c = 0;
  typetext();
  setTimeout( "rotateTicker()", 5000 );
  i++;
}

var isInTag = false;
function typetext() { 
  var thisChar = tickerText.substr(c, 1);
  if( thisChar == '<' ){ isInTag = true; }
  if( thisChar == '>' ){ isInTag = false; }
  $('#ticker-area').html("&nbsp;" + tickerText.substr(0, c++));
  if(c < tickerText.length+1)
    if( isInTag ){
      typetext();
    }else{
      setTimeout("typetext()", 180);
    }
  else {
    c = 1;
    tickerText = "";
  } 
}




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