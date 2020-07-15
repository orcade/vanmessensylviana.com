"use strict";
// variables
var menuHamDom;
var menuMainDom;

menuHamDom = document.getElementById('menu-hamburger');
menuMainDom = document.getElementById('menu-principale');

if (menuHamDom != null) {
    menuHamDom.addEventListener('click', function (e) {
        menuHamDom.classList.toggle("is-open");
        menuMainDom.classList.toggle("is-visible");
        e.preventDefault();
    });

    menuMainDom.addEventListener('click', function (e) {
        menuHamDom.classList.toggle("is-open");
        menuMainDom.classList.toggle("is-visible");
    });

}



// Initial visibility set to "none"


const arrowUp = document.getElementById("menu-up");
arrowUp.style.display = "none";

// Visibility  "background" when scrolling
window.addEventListener("scroll", function(){
	if(window.pageYOffset >  10){
		arrowUp.style.display = "block";
	}
	else{
		arrowUp.style.display = "none";
	}
}, false);

