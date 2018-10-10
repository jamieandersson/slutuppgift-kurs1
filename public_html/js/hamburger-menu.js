function navToggle() {
      var x = document.getElementById("myTopnav");
      if (x.className === "topnav") {
         x.className += " dropped";
      } else {
         x.className = "topnav";
      }
}