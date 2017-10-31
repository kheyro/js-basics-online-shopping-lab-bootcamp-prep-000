var cart = [];

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
  console.log(cart.length);
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
viewCart();
function total() {
  // write your code here
  let total = 0;
  for(let i = 0;i < cart.length; i++) {
    for (var key in cart[i]) {
      total += cart[i][key];
    }
  }
  return total;
}

function removeFromCart(item) {
  // write your code here
  for(let i = 0;i < cart.length; i++) {
    if(cart[i].hasOwnProperty(item)) {
      cart.splice(i, 1);
      return cart;
    }
  }

  return "That item is not in your cart.";
}

function placeOrder(cardNumber) {
  // write your code here
  if(!cardNumber) {
    return "Sorry, we don't have a credit card on file for you.";
  } else {
    return `Your total cost is $${total()}, which will be charged to the card ${cardNumber}.`;
  }

}
