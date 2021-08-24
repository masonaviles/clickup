'use strict';

const toggle = document.querySelector(".toggle");
        
/* Toggle mobile menu */
function toggleMenu() {
    const menu = document.querySelector(".menu");
    menu.classList.toggle("show");
}

/* Event Listener */
toggle.addEventListener("click", toggleMenu, false);