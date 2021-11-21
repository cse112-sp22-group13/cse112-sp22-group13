function openNav() {
    document.querySelector("#sideNavbar").style.width = "250px";
    document.querySelector("#navButton .openbtn").onclick = closeNav;
}

function closeNav() {
    document.querySelector("#sideNavbar").style.width = "0";
    document.querySelector("#navButton .openbtn").onclick = openNav;
}