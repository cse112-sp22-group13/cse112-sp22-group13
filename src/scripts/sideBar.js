function openNav () {
  if (document.querySelector('#sideNavbar').style.width != '250px') {
    document.querySelector('#sideNavbar').style.width = '250px';
  } else {
    document.querySelector('#sideNavbar').style.width = '0px';
  }
  //document.querySelector('#sideNavbar').style.width = '250px';
  //document.querySelector('#navButton .openbtn').onclick = closeNav;
}

function closeNav () {
  document.querySelector('#sideNavbar').style.width = '0';
  document.querySelector('#navButton .openbtn').onclick = openNav;
}
