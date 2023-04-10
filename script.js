const navbarEmail = document.querySelector('.navbar-email');
const desktopMenu = document.querySelector('.desktop-menu');
const menuMobile = document.querySelector('.mobile-menu');
const menuBurger = document.querySelector('.burger-menu');
const carritoIcon = document.querySelector('.navbar-shopping-cart');
const aside = document.querySelector('.product-shoppingCart');
const cardsContainer = document.querySelector('.cards-container');
const mainContainer = document.querySelector('.main-container');
const productDetail = document.querySelector('.product-detail');
const closeDetail = document.querySelector('.product-detail-close');

navbarEmail.addEventListener('click', toggleDesktopMenu);
menuBurger.addEventListener('click', toggleMobileMenu);
carritoIcon.addEventListener('click', toggleAsideMenu);
closeDetail.addEventListener('click', closeDetailProduct);


function toggleDesktopMenu() {
    desktopMenu.classList.toggle('inactive');
    aside.classList.add('inactive');
}

function toggleMobileMenu() {
    menuMobile.classList.toggle('inactive');
    aside.classList.add('inactive');
}

function toggleAsideMenu () {
    aside.classList.toggle('inactive');
    menuMobile.classList.add('inactive');
    desktopMenu.classList.add('inactive');
    productDetail.classList.add('inactive');
}

function toggleProductDetail (){
    productDetail.classList.toggle('inactive');
    aside.classList.add('inactive');   
}

function closeDetailProduct(){
    productDetail.classList.toggle('inactive');
}
 
const productList = [];
productList.push({
    name: 'bike',
    price: 320,
    img:"https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
});
productList.push({
    name: 'pantalla',
    price: 509,
    img:"https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
});
productList.push({
    name: 'celular',
    price: 230,
    img:"https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
});

productList.push({
    name: 'celular',
    price: 230,
    img:"https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
});
productList.push({
    name: 'celular',
    price: 230,
    img:"https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
});
function renderProducts(arr){
for(product of arr){
    const productCard = document.createElement('div');
    productCard.classList.add('product-card');

    const img = document.createElement('img');
    img.setAttribute('src', product.img);


    const productInfo = document.createElement('div');
    productInfo.classList.add('product-Cinfo');
    

    const productInfoDiv = document.createElement('div');
    const productPrice = document.createElement('p');
    productPrice.innerText = "$" + product.price;
    const productName = document.createElement('p');
    productName.innerText = product.name;
    productInfoDiv.append(productPrice, productName);
    
    
    const figure = document.createElement('figure');
    const imgFigure = document.createElement('img');
    imgFigure.setAttribute('src', "./icons/bt_add_to_cart.svg");

    figure.appendChild(imgFigure);
    
    productInfo.append(productInfoDiv, figure);
    productCard.append(img, productInfo);
    
    cardsContainer.appendChild(productCard);
    mainContainer.appendChild(cardsContainer);
    
    productCard.addEventListener('click', toggleProductDetail);
    
}
}

renderProducts(productList);
