/**
 * Function that applies styling to expand and close the navbar on the side when clicked.
 */
<<<<<<< Updated upstream
function clickNav () {
=======
 function clickNav () {
>>>>>>> Stashed changes
  if (document.querySelector('#sideNavbar').style.width !== '250px') {
    document.querySelector('#sideNavbar').style.width = '250px';
  } else {
    document.querySelector('#sideNavbar').style.width = '0px';
  }
}


window.onscroll = function() {scrollFunction()};
function scrollFunction() {
  let mybutton = document.getElementById("myBtn");
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}
 function topFunction() {
    document.body.scrollTop = 0; // For Safari
    document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
}