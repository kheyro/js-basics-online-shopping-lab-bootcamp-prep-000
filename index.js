var cart = [];

function getCart() {
 return cart;
}

function setCart(c) {
  cart = c;
  return cart;
}

function addToCart(item) {
 // write your code here
 var itemPrice = Math.floor(Math.random() * 100);
 cart.push({item: itemPrice});
 console.log(`${item} has been added to your cart.`);
 return cart;
}

function viewCart(cart) {
  // write your code here
  const items = [];

  for(let i = 0; i < cart.length; i++) {
    items[i] = "you have ${cart[i].itemName at $${itemPrice}}";
  }

  return items.join(',');
}

function total() {
  // write your code here
}

function removeFromCart(item) {
  // write your code here
}

function placeOrder(cardNumber) {
  // write your code here
}
