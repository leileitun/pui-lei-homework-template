class Roll {
  constructor(rollType, rollGlazing, packSize, basePrice) {
    this.type = rollType;
    this.glazing =  rollGlazing;
    this.size = packSize;
    this.basePrice = basePrice;
  }
}

const cart = []; //empty array to store my cart items

//creating my new rolls 
const originalSugarMilk = new Roll('Original', 'Sugar milk', '1', 2.49);
const walnutVanillaMilk = new Roll('Walnut', 'Vanilla milk', '12', 3.49);
const raisinSugarMilk = new Roll('Raisin', 'Sugar milk', '3', 2.99);
const appleOriginal = new Roll('Apple', 'Keep original', '3', 3.49);

let glazingDictionary = {
  original: {name: "Keep original", value: 0.00},
  sugar: {name: "Sugar milk", value: 0.00},
  vanilla: {name: "Vanilla milk", value: 0.50},
  chocolate: {name: "Double chocolate", value: 1.50}
};

let packDictionary = [
  {name: "1", value: 1},
  {name: "3", value: 3},
  {name: "6", value: 5},
  {name: "12", value: 10}
];

function calculatePrice(roll){ 
  let glazingPrice = 0;
  for (let element in glazingDictionary){
    if (roll.glazing === glazingDictionary[element].name){
      glazingPrice = glazingDictionary[element].value;
      break;
    }
  }
  let packSizeSize = 1; 
  for (let element in packDictionary){
    if (roll.size === packDictionary[element].name){
      packSizeSize = packDictionary[element].value; 
      break;
    }
  }
  let totalPrice = (roll.basePrice + glazingPrice)*packSizeSize;
  return totalPrice;
}

cart.push(originalSugarMilk);
cart.push(walnutVanillaMilk);
cart.push(raisinSugarMilk);
cart.push(appleOriginal);

function displayCart(roll){ 
  const cartContainer = document.querySelector('.checkout');
  const cartItem = document.querySelector('#cart-template').content.cloneNode(true);  //clone new row and returns it 
  roll.element = cartItem.querySelector('.newcontainer');

  cartItem.querySelector('#cartpic').src = `../assets/products/${roll.type.toLowerCase()}` +`-cinnamon-roll.jpg`;
  cartItem.querySelector('#name').textContent = roll.type + " Cinnamon Roll";
  cartItem.querySelector('#glaze').textContent = "Glazing: " + roll.glazing;
  cartItem.querySelector('#packsize').textContent = "Pack Size: " + roll.size;
  cartItem.querySelector('.pricepoint').textContent = "$ " + calculatePrice(roll).toFixed(2);
    
  const removelink = cartItem.querySelector('.removal'); 
  removelink.addEventListener('click', () => {
    deleteItem(roll);
    });

    cartContainer.appendChild(cartItem);
}

//need a function to calcualte the total price and display the total price

function calculateTotalPrice(cart) {
  let totalPrice = 0;
  for (let roll of cart) {
    totalPrice = totalPrice + calculatePrice(roll);
  }
  return totalPrice.toFixed(2);
}

function displayTotalPrice() {
  const totalpriceElement = document.querySelector('.totalprice');
  const total = calculateTotalPrice(cart);
  totalpriceElement.textContent = "$ " + total;
}

//sourced mozilla developer to see syntax for array.prototype.splice
function deleteItem(roll){
  const index = cart.indexOf(roll); 
  if (index != -1){
    cart.splice(index, 1);
    displayTotalPrice();
}
roll.element.remove();
}

for (let roll of cart){
  displayCart(roll);
}

displayTotalPrice();