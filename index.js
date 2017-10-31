var cart = [{"sss":22}];

function getCart() {
 return cart;
}

function setCart(c) {
  cart = c;
  return cart;
}

function addToCart(itemName) {
 // write your code here
 var itemPrice = Math.floor(Math.random() * 100);
 cart.push({[itemName]: itemPrice});
 console.log(`${itemName} has been added to your cart.`);
 return cart;
}

function viewCart() {
  // write your code here
  if (!cart.length) {
    console.log("Your shopping cart is empty");
  }

  // const items = [];
  //
  // for(let i = 0; i < cart.length; i++) {
  //   items[i] = "you have ${cart[i].itemName at $${itemPrice}}";
  // }
  //
  // return items.join(',');
}

function total() {
  // write your code here
}

function removeFromCart(item) {
  // write your code here
  for(let i = 0;i < cart.length; i++) {
    if(cart[i].hasOwnProperty(item)) {
      delete cart.item;
      return cart;
    }
  }

  return "That item is not in your cart.";
}
removeFromCart("sss");

function placeOrder(cardNumber) {
  // write your code here


}
