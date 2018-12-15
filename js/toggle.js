var open_menu = document.getElementById("main-menu");
var burger_menu = document.getElementById("burger_menu");

burger_menu.addEventListener("click", function(){
  burger_menu.classList.toggle("active-burger");
  open_menu.classList.toggle("show-menu-mobile");
});
