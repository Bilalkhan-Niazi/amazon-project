
export let cart = JSON.parse(localStorage.getItem('cart'));

//local stoage can only save strings so it can give us only string version of our cart
// then we need to convert it back into an array so we use JSON.parse

if (!cart){
  cart = [{
   productId :
    'e43638ce-6aa0-4b85-b27f-e1d07eb678c6',
   quantity : 2,

},{
    productId: "15b6fc6f-327a-4ec4-896f-486349e85a3d",
    quantity : 1,

}];
}


function saveToStorage (){
  localStorage.setItem('cart' , JSON.stringify(cart));
}

export function addToCart(productId){
     let matchingItem;
    cart.forEach((cartItem) => {
      if (productId === cartItem.productId){
      matchingItem = cartItem ;
    }
    });

    if(matchingItem){
      matchingItem.quantity += 1;
    }else {
      cart.push(
      {
        productId :productId,
        quantity: 1
      }
    )};
    //after update the cart
    saveToStorage();
    }

    export function removeFromcart(productId){
    const newCart = [];

    cart.forEach((cartItem) => {

        if (cartItem.productId !== productId){
            newCart.push(cartItem);
        }
    })
    cart = newCart;
    //after update the cart
    saveToStorage();

}