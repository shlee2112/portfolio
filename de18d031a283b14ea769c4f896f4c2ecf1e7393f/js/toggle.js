var burger_menu = document.getElementById("burger_menu");
var open_menu = document.getElementById("main-menu");

burger_menu.addEventListener("click", function(){
  burger_menu.classList.toggle("active-burger");
  open_menu.classList.toggle("show-menu-mobile");
});


var ux_menu = document.getElementById("ux");
var open_ux_menu = document.getElementById("hidden");
var close_btn = document.getElementById("menu_close_btn");
var curtain = document.getElementById("curtain");


ux_menu.addEventListener("click", function(){
  ux_menu.classList.toggle("active-ux");
  open_ux_menu.classList.toggle("show-menu-ux");
  close_btn.classList.toggle("show_close");
  curtain.classList.toggle("show_curtain");
});

close_btn.addEventListener("click", function(){
  ux_menu.classList.toggle("active-ux");
  open_ux_menu.classList.toggle("show-menu-ux");
  close_btn.classList.toggle("show_close");
  curtain.classList.toggle("show_curtain");
});

curtain.addEventListener("click", function(){
  ux_menu.classList.toggle("active-ux");
  open_ux_menu.classList.toggle("show-menu-ux");
  close_btn.classList.toggle("show_close");
  curtain.classList.toggle("show_curtain");
});