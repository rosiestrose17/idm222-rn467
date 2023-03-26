//Change menu into a clickable icon:
function myFunction() {
  var x = document.getElementById("topMenu");
  if (x.className === "nav_links") {
    x.className += " collapsed";
  } else {
    x.className = "nav_links";
  }
}
