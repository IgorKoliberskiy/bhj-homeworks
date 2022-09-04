const product = document.querySelectorAll('.product');
const cartProducts = document.querySelector('.cart__products');

for (let productName of product) {
  const productAdd = productName.querySelector('.product__add');
  const productId = productName.getAttribute('data-id');
  const productImage = productName.querySelector('.product__image');
  const productQuantityValue = productName.querySelector('.product__quantity-value'); 
  const quantityControlAdd = productName.querySelector('.product__quantity-control_inc');
  const quantityControlDec = productName.querySelector('.product__quantity-control_dec');
  
  quantityControlAdd.onclick = () => {
    productQuantityValue.textContent = String(Number(productQuantityValue.textContent) + 1); 
  }

  quantityControlDec.onclick = () => {
    if(Number(productQuantityValue.textContent) > 1) {
      productQuantityValue.textContent = String(Number(productQuantityValue.textContent) - 1); 
    }
  }
  
  productAdd.onclick = () => {
    const cartProduct = cartProducts.querySelectorAll('.cart__product');
    const cartProductAdd = Array.from(cartProduct).find((elem) => (elem.getAttribute('data-id') === productId))
    
    if (cartProductAdd) {
      cartProductAdd.querySelector('.cart__product-count').textContent = String(Number(cartProductAdd.querySelector('.cart__product-count').textContent) + Number(productQuantityValue.textContent));
    } else {
        const div = document.createElement('div');
        div.classList.add('cart__product');
        div.setAttribute('data-id', productId);        
        cartProducts.appendChild(div);

        const img = document.createElement('img');
        img.classList.add('cart__product-image');
        img.setAttribute('src', productImage.getAttribute('src'));
        div.appendChild(img);

        const divCount = document.createElement('div');
        divCount.classList.add('cart__product-count');
        divCount.textContent = productQuantityValue.textContent;
        div.appendChild(divCount);
    }
  }
}