/*#ham================== */
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


}



