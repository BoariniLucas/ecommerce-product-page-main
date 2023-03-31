const btnMenuBurguer = document.querySelector('#btn-burguer-img');
const btnCloseMenu = document.querySelector('#btn-close-menu');


/* dunção para menu hamburguer */
function toggleMenu() {
    const menuBurguer = document.querySelector('#menu-burguer');

    menuBurguer.classList.toggle('active');
}


btnMenuBurguer.addEventListener('click', toggleMenu);
btnCloseMenu.addEventListener('click', toggleMenu);