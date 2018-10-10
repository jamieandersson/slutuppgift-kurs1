const breakpoint = $("960px").width();

let previousWidth = $(window).width();

selectAlphaMode(previousWidth);

$(window).resize(function() {
  let width = $(window).width();

  if ((width < breakpoint && previousWidth >= breakpoint) || (width >= breakpoint && previousWidth < breakpoint)) {
    selectAlphaMode(width);
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