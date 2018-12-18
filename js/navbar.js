function replaceLogo() {
    var w = window.outerWidth;
    var logo = document.getElementById("logo");
    var ux = document.getElementById("ux");
    if (w <= 992){
      logoImg = '<a href="index.html"><img src="images/logo.png" alt="Logo" id="logo-nav" class="logo-nav"></a>';
      uxAbr = 'UX';
      logo.innerHTML = logoImg;
      ux.innerHTML = uxAbr;
    }
    else{
      logoImg = '<a href="index.html" class="logo">Sanghyun Lee</a>';
      uxAbr = 'User Experience';
      logo.innerHTML = logoImg;
      ux.innerHTML = uxAbr;
    }
}
