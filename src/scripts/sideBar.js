/** 
 * Function that applies styling to expand and close the navbar on the side
 * when clicked.
 */
function clickNav () {
  if (document.querySelector('#sideNavbar').style.width != '250px') {
    document.querySelector('#sideNavbar').style.width = '250px';
  } else {
    document.querySelector('#sideNavbar').style.width = '0px';
  }
}