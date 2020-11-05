//when the user scrolls the page, execute myFunction

window.onscroll = function() {stickyHeader()};

//get the header

var header = document.getElementById("nav-bar-container");

//get the offset position of the navbar
var sticky = header.offsetTop;
//add the sticky class to the header when you reach its scroll position. Remove "sticky" when you leave the scroll position.

function stickyHeader() {
    if (window.pageYOffset > sticky) {
        header.classList.add("sticky");
    } else {
        header.classList.remove("sticky");
    }
    
}