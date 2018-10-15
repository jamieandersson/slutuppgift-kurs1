const breakpoint = 1400;

let previousWidth = $(window).width();
var x = document.getElementById("myTopnav");

selectAlphaMode(previousWidth);

function navToggle() {  
  if (x.className === "topnav") {
     x.className += " dropped";
  } else {
     x.className = "topnav";
  }
}

$(window).resize(function() {
  let width = $(window).width();
  if ((width < breakpoint && previousWidth >= breakpoint) || (width >= breakpoint && previousWidth < breakpoint)) {
    selectAlphaMode(width);
    if (x.className === "topnav dropped") {
      x.className = "topnav"
    }
  }  

  previousWidth = width;

});

function selectAlphaMode(width) {

  if (width < breakpoint) {
    $(document).scroll().off();
    setAlpha(1);
  } else {
    setAlpha(calcAlpha());
    $(document).scroll(function() {
      setAlpha(calcAlpha());
    });
  }

}

function setAlpha(alpha) {
  $("nav").css("background-color", "rgba(26 , 22 , 21," + alpha + ")");
}

function calcAlpha() {
  let alpha = 0;

  let scroll = $(document).scrollTop();

  const fadeStart = 300;

  const fadeStop = 300;

  const fadeLength = fadeStop - fadeStart;

  if (scroll < fadeStart) {
    alpha = 0.8;
  } else {
    alpha = 1;
  }
  
  return alpha;  
}