window.onscroll = function() {stickyNav()};

var navbar = document.getElementById("navbar");
var sticky = navbar.offsetTop;
var banner = document.getElementById("banner");
var title = document.getElementById("title");
var w = window.outerWidth;
var html = document.innerHTML

function stickyNav() {
  if (window.pageYOffset >= sticky) {
    navbar.classList.add("sticky");
    if (w > 768 && banner){
      banner.style.paddingTop =  '6em';
    }
    else if (w <= 768 && banner){
      banner.style.paddingTop =  '4em';
    }

    else if (w > 768 && title){
      title.style.paddingTop =  '4em';
    }
    else if (w <= 768 && title){
      title.style.paddingTop =  '2em';
    }
  }
  else {
    navbar.classList.remove("sticky");


  }

  // if(window.pageYOffset = sticky){
  //   document.getElementByClass("sticky").style.boxShadow = 'none';
  // }
}
