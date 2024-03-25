
var img = new Image();
img.src = "LOGO.png"; 
img.width = 110; 
img.height = 45; 
img.style.paddingLeft="2rem";
img.style.paddingTop="1rem";
document.body.appendChild(img);


//append Element 
let elm = document.querySelector("body");
var ul = document.createElement("ul");
var li = document.createElement("li");
li.textContent="Home";
ul.appendChild(li);


elm.appendChild(ul);

elm.style.display="flex";
elm.style.justifyContent="space-between";


//Hamburger Responsive

/*var myjsmedia = (hamburger) => {
    if (hamburger.matches) {
      var hamburger = document.getElementById("hamburger");
  
      hamburger.style.display = "block";
  
      div2.appendChild(hamburger);
    } else {
      var hamburger = document.getElementById("hamburger");
  
      hamburger.style.display = "none";
  
      div2.appendChild(hamburger);
    }
  };
  
  var hamburger = window.matchMedia("(max-width: 1024px)");
  
  myjsmedia(hamburger);
  
  hamburger.addEventListener("change", myjsmedia);
  
  //Nav Links Responsive
  var navmedia = (navlinks) => {
    if (navlinks.matches) {
      var links_div = document.createElement("div");
  
      links_div.style.display = "none";
    } else {
      var links_div = document.createElement("div");
  
      links_div.style.display = "flex";
  
      links_div.style.width = "35%";
  
      links_div.style.justifyContent = "space-between";
  
      div2.appendChild(links_div);
  
      // var link1 = document.createElement("a");
  
      link1.innerText = "Home";
  
      link1.setAttribute("href", "#");
  
      link1.style.color = "black";
  
      link1.style.textDecoration = "none";
  
      link1.style.fontSize = "16px";
  
      link1.style.fontFamily = "Tahoma";
  
      links_div.appendChild(link1);
  
      var link2 = document.createElement("a");
  
      link2.innerText = "About Us";
  
      link2.setAttribute("href", "About Us");
  
      link2.style.color = "black";
  
      link2.style.textDecoration = "none";
  
      link2.style.fontSize = "16px";
  
      link2.style.fontFamily = "Tahoma";
  
      links_div.appendChild(link2);
  
      var link3 = document.createElement("a");
  
      link3.innerText = "Blog";
  
      link3.setAttribute("href", "Blog");
  
      link3.style.color = "black";
  
      link3.style.textDecoration = "none";
  
      link3.style.fontSize = "16px";
  
      link3.style.fontFamily = "Tahoma";
  
      links_div.appendChild(link3);
  
      var link4 = document.createElement("a");
  
      link4.innerText = "Contact Us";
  
      link4.setAttribute("href", "Contact Us");
  
      link4.style.color = "black";
  
      link4.style.textDecoration = "none";
  
      link4.style.fontSize = "16px";
  
      link4.style.fontFamily = "Tahoma";
  
      links_div.appendChild(link4);
    }
  };
  
  var navlinks = window.matchMedia("(max-width: 1024px)");
  
  navmedia(navlinks);
  
  navlinks.addEventListener("change", navmedia);*/