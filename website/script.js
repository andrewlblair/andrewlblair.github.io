function myFunction() {
  var x = document.getElementById("nav");
  if (x.className === "navbar topnav") {
    x.className += " responsive";
  } else {
    x.className = "navbar topnav";
  }
} 