function replaceLogo() {
    var w = window.outerWidth;
    var logo = document.getElementById("logo");
    var ux = document.getElementById("ux");
    var hiddenList = document.getElementById("hidden");
    var location = window.location.href;


    if (w <= 992){
      // replace logo in mobile view
      logoImg = '<h5><div class="logo-container" id="logo"><a href="#" class="logo_sm">Sanghyun Lee</a></div></h5>';
      uxAbr = 'UX';
      logo.innerHTML = logoImg;
      ux.innerHTML = uxAbr;

      // Add Mobile Nav
      uxList = '<li><a href="heybunny.html">Heybunny</a></li><li><a href="google_internship.html">Google UX Design Internship</a></li><li><a href="docnetwork.html">DocNetwork</a></li><li><a href="ibm_maelstrom.html">IBM Design Maelstrom</a></li>';
      hidden.innerHTML = uxList;



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
    let uxlinks = ["heybunny.html", "google_internship.html", "docnetwork.html", "ibm_maelstrom.html"]
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

