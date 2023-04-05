/*      ----Tag's HTML----      */

const principalImage = document.querySelector('.principal-image');
const btnImg1Thumb = document.querySelector('.tumbnail-item1'); 
const btnImg2Thumb = document.querySelector('.tumbnail-item2');
const btnImg3Thumb = document.querySelector('.tumbnail-item3');
const btnImg4Thumb = document.querySelector('.tumbnail-item4');
const principalImageSlideCarousel = document.querySelector('.principal-image-slide-carousel');
const backgroundCarousel = document.querySelector('.background-carousel');

const btnMenuBurguer = document.querySelector('#btn-burguer-img');
const btnCloseMenu = document.querySelector('#btn-close-menu');
const btnCartPopUp = document.querySelector('#btn-cart-pop-up');
const btnMinusProduct = document.querySelector('#btn-minus-product');
const btnPlusProduct = document.querySelector('#btn-plus-product');
const btnAddCart = document.querySelector('#btn-add-cart');
const btnDeletePopUp = document.querySelector('#btn-delete-pop-up');
const btnCheckoutPopUp = document.querySelector('#btn-checkout-pop-up');
const btnCloseCarousel = document.querySelector('#carousel-btn-close');
const btnPrevious = document.querySelector('#button-previous');
const btnNext = document.querySelector('#button-next');

const qtdItemDisplay = document.querySelector('#qtd-item-display');
const qtdItemDisplayPopUp = document.querySelector('#qtd-item-display-pop-up');
const spanQtdItem = document.querySelector('#span-qtd-item');
const boxContentPrice = document.querySelector('#box-content-price');
const emptyCartForm = document.querySelector('#empty-cart-form');
const imgPrincipal = document.querySelector('#img-principal');
const totalPriceDisplay = document.querySelector('#total-price-display');



let productPrice = 125;
let qtdProduct = 0;
let totalPrice = 0;
let contImage = 1;


btnPrevious.addEventListener('click', () => {
    if (contImage == 1) { 
        contImage = 4;

    } else {
        contImage = contImage - 1;
    }

    chandeImage(contImage);
});

btnNext.addEventListener('click', () => {
    if(contImage == 4) {
        contImage = 1;

    } else {
        contImage = contImage +  1;
    }    
    
    chandeImage(contImage);
});

function chandeImage(numImage) {
    principalImageSlideCarousel.style.backgroundImage = "url(assets/images/image-product-"+numImage+".jpg)";
}







/*      ----Events----      */  

btnMinusProduct.addEventListener('click', () => {
    if (qtdProduct != 0) {
          qtdProduct = qtdProduct -  1;  
          qtdItemDisplay.innerHTML = qtdProduct;
    }    
});

btnPlusProduct.addEventListener('click', () => {
    qtdProduct = qtdProduct +  1;
    qtdItemDisplay.innerHTML = qtdProduct;
});

btnAddCart.addEventListener('click', () => {
        addCartPopUpResult();
});

btnDeletePopUp.addEventListener('click', () => {
    deleteCartItens();
});

imgPrincipal.addEventListener('dblclick', () => {
    backgroundCarousel.style.display = "block";
});

btnCloseCarousel.addEventListener('click', () => {
    backgroundCarousel.style.display = "none";
});

/* Toggle menu */
btnMenuBurguer.addEventListener('click', toggleMenu);
btnCloseMenu.addEventListener('click', toggleMenu);
btnCartPopUp.addEventListener('click', toggleCart);


/*      ----Functions----      */

/* Function Toggle Menu */
function toggleMenu() {
    const menuBurguer = document.querySelector('#menu-burguer');

    menuBurguer.classList.toggle('active');
}

function toggleCart() {
    const popUpCart = document.querySelector('#cart-box-pop-up');

    popUpCart.classList.toggle('active');
}

function addCartPopUpResult() {
    
        if(qtdProduct == 0) {
            boxContentPrice.classList.remove('active');
            emptyCartForm.classList.remove('active');
            btnCheckoutPopUp.classList.remove('active'); 
            spanQtdItem.classList.remove('active');

        } else {
            boxContentPrice.classList.add('active');
            emptyCartForm.classList.add('active');
            btnCheckoutPopUp.classList.add('active');
            spanQtdItem.classList.add('active');

            priceCalc();            
        }
}

function changeImage(imageIten) {
  if (imageIten == 1) {
    resetBorder();
    principalImage.style.backgroundImage = "url(assets/images/image-product-1.jpg)";
    btnImg1Thumb.style.border = "solid #ff7d1b";

    } else if (imageIten == 2) {
        resetBorder();
        principalImage.style.backgroundImage = "url(assets/images/image-product-2.jpg)";
        btnImg2Thumb.style.border = "solid #ff7d1b";
        
    } else if (imageIten == 3) {
        resetBorder();
        principalImage.style.backgroundImage = "url(assets/images/image-product-3.jpg)";
        btnImg3Thumb.style.border = "solid #ff7d1b";

    } else {
        resetBorder();
        principalImage.style.backgroundImage = "url(assets/images/image-product-4.jpg)";
        btnImg4Thumb.style.border = "solid #ff7d1b";
    }  
}

function changeImagePop(imageIten) {
    if (imageIten == 1) {
          resetBorder();
          principalImageSlideCarousel.style.backgroundImage = "url(assets/images/image-product-1.jpg)";
          btnImg4Thumb.style.border = "solid #ff7d1b"
  
      } else if (imageIten == 2) {
          resetBorder();          
          principalImageSlideCarousel.style.backgroundImage = "url(assets/images/image-product-2.jpg)";
          btnImg4Thumb.style.border = "solid #ff7d1b"
          
      } else if (imageIten == 3) {
          resetBorder();  
          principalImageSlideCarousel.style.backgroundImage = "url(assets/images/image-product-3.jpg)";
          btnImg4Thumb.style.border = "solid #ff7d1b"
  
      } else {
          resetBorder();  
          principalImageSlideCarousel.style.backgroundImage = "url(assets/images/image-product-4.jpg)";
          btnImg4Thumb.style.border = "solid #ff7d1b"
      }  
  }

function resetBorder(){
    btnImg1Thumb.style.border = "none";
    btnImg2Thumb.style.border = "none";
    btnImg3Thumb.style.border = "none";
    btnImg4Thumb.style.border = "none";
}

function priceCalc() {
    totalPrice = qtdProduct * productPrice;
    totalPriceDisplay.innerHTML =  '$'+totalPrice+",00";
    spanQtdItem.innerHTML = qtdProduct;

    printData();
}

function printData() {
    qtdItemDisplayPopUp.innerHTML = qtdProduct;
}

function deleteCartItens() {
    qtdProduct = 0;
    totalPrice = "0,00";

    qtdItemDisplay.innerHTML = qtdProduct;
    totalPriceDisplay.innerHTML = totalPrice;

    boxContentPrice.classList.remove('active');
    emptyCartForm.classList.remove('active');
    btnCheckoutPopUp.classList.remove('active'); 
    spanQtdItem.classList.remove('active');

}


