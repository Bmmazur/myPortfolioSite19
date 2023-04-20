//script for rotating images in a set//
var slideIndex = 1;
showDivs(slideIndex);
function plusDivs(n){
    showDivs(slideIndex += n);
}
function showDivs(n){
    var i;
    var x = document.getElementsByClassName("workSlides");
    if (n > x.length) {slideIndex = 1}
    if (n < 1) {slideIndex = x.length}
    for (i = 0; i < x.length; i++) {
        x[i].style.display = "none";
    }
    x[slideIndex-1].style.display = "block";
}

//Variables for my resume modal//
var modal = document.getElementById("resumeModal");
var btn = document.getElementById("resumeButton");
var span = document.getElementsByClassName("close")[0];

//script for displaying my resume as a modal element//
btn.onclick = function() {
    modal.style.display = "block";
}

span.onclick = function() {
    modal.style.display = "none";
}

window.onclick = function() {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}

//This function toggles between responsive and topnav//
function responsiveNav() {
    var x = document.getElementById("myTopnav");
    if (x.className === "topnav") {
      x.className += " responsive";
    } else {
      x.className = "topnav";
    }
  }