function replaceLogo() {
    var w = window.outerWidth;
    var logo = document.getElementById("logo");
    var ux = document.getElementById("ux");
    var hiddenList = document.getElementById("hidden");
    var location = window.location.href;


    uxList = '<li><a href="spotlight.html">Spotlight</a></li><li><a href="savia_design_system.html">Savia Design System</a></li><li><a href="epp.html">E-Path Plus</a></li><li><a href="heybunny.html">Heybunny</a></li>';


    if (w <= 768){
    hidden.innerHTML = uxList;
    ux.href = "index.html"
  }
  else{
    hidden.innerHTML = '<li><a href="index.html">UX</a></li><li style="border: var(--border_color) 1px solid; width:372px;"></li>' + uxList;
    ux.href = "#"
  }

    
    if (w <= 992){
      // replace logo in mobile view
      // logoImg = '<h5><div class="logo-container" id="logo"><a href="#" class="logo_sm">Sanghyun Lee</a></div></h5>';
      logoImg = '<a href="index.html" class="logo">Sanghyun Lee</a>';
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


   // Current Location
    let loc = location.split("/");
    let currentLoc = loc[loc.length - 1];

    let nav = document.getElementById("navbar");

    let links = nav.getElementsByTagName("a");
    let uxlinks = ["index.html", "spotlight.html", "savia_design_system.html", "epp.html", "heybunny.html", ]
    // console.log(links)

    for (i = 0; i < links.length; i++){
      let linkhref = links[i].href.split("/");
      let active = linkhref[linkhref.length - 1];      
      // console.log(active)

      if (active === currentLoc ){
        if(links[i].text !== "Sanghyun Lee"){
          links[i].classList.add("active");
        }
        if(uxlinks.includes(active)){
          document.getElementById("ux").classList.add("active");
        }
      }
    }

}
