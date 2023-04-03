/*   --Tag's HTML--   */
const btnMenuBurguer = document.querySelector('#btn-burguer-img');
const btnCloseMenu = document.querySelector('#btn-close-menu');
const principalImage = document.querySelector('.principal-image');
const btnImg1Thumb = document.querySelector('.tumbnail-item1'); 
const btnImg2Thumb = document.querySelector('.tumbnail-item2');
const btnImg3Thumb = document.querySelector('.tumbnail-item3');
const btnImg4Thumb = document.querySelector('.tumbnail-item4');

/*   --Eventos--   */   



/*
btnImg2Thumb.addEventListener('click', () => {

    principalImage.style.backgroundImage = "url(assets/image-product-2.jpg);";
    console.log("Agor foi");

});

*/





/*   --Functions--   */

/* Function Toggle Menu */
function toggleMenu() {
    const menuBurguer = document.querySelector('#menu-burguer');

    menuBurguer.classList.toggle('active');
}

function changeImage(imageIten) {
  if (imageIten == 1) {
    resetBroder();
    principalImage.style.backgroundImage = "url(assets/images/image-product-1.jpg)";
    btnImg1Thumb.style.border = "solid #ff7d1b";

    } else if (imageIten == 2) {
        resetBroder();
        
        principalImage.style.backgroundImage = "url(assets/images/image-product-2.jpg)";
        btnImg2Thumb.style.border = "solid #ff7d1b";
        
    } else if (imageIten == 3) {
        resetBroder();
        principalImage.style.backgroundImage = "url(assets/images/image-product-3.jpg)";
        btnImg3Thumb.style.border = "solid #ff7d1b";

    } else {
        resetBroder();
        principalImage.style.backgroundImage = "url(assets/images/image-product-4.jpg)";
        btnImg4Thumb.style.border = "solid #ff7d1b";
    }  
}

function resetBroder(){
    btnImg1Thumb.style.border = "none";
    btnImg2Thumb.style.border = "none";
    btnImg3Thumb.style.border = "none";
    btnImg4Thumb.style.border = "none";
}


btnMenuBurguer.addEventListener('click', toggleMenu);
btnCloseMenu.addEventListener('click', toggleMenu);