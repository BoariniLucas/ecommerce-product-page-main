/*   --Tag's HTML--   */
const btnMenuBurguer = document.querySelector('#btn-burguer-img');
const btnCloseMenu = document.querySelector('#btn-close-menu');
const principalImage = document.querySelector('.principal-image');

/*   --Functions--   */

/* Function Toggle Menu */
function toggleMenu() {
    const menuBurguer = document.querySelector('#menu-burguer');

    menuBurguer.classList.toggle('active');
}

function changeImage(image) {
    if (image == 1) {
        principalImage.style.background = "url(../images/image-product-1.jpg)";
    } else if (image == 2) {
        principalImage.style.background = "url(../images/image-product-2.jpg);";
    }
}


btnMenuBurguer.addEventListener('click', toggleMenu);
btnCloseMenu.addEventListener('click', toggleMenu);