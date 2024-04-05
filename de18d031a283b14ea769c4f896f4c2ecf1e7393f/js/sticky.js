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


  var winScroll = document.body.scrollTop || document.documentElement.scrollTop;
  var height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
  var scrolled = (winScroll / height) * 100;
    document.getElementById("scrollInd").style.width = scrolled + "%";


  if (document.body.scrollTop > 80 || document.documentElement.scrollTop > 80) {
    document.getElementById("navbar").style.padding = "0 0";
    document.getElementById("navbar").style.boxShadow = "0 4px 8px 0 rgba(0, 0, 0, 0.2)";
    document.getElementById("logo-nav").style.width = "6vw";
  }
  else {
    document.getElementById("navbar").style.padding = "2em 0";
    document.getElementById("navbar").style.boxShadow  = "none";
    document.getElementById("logo-nav").style.width = "10vw";
  }



}
