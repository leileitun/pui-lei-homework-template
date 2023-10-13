// create objects within with key-value pairs with name and value 
class Roll {
  constructor(rollType, rollGlazing, packSize, basePrice) {
    this.type = rollType;
    this.glazing =  rollGlazing;
    this.size = packSize;
    this.basePrice = basePrice;
  }
}

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

//three interactions: glaze, size, prices
//retrieve HTML elements so we can interact with them
let glazingElement = document.querySelector('#glazing-select'); 
let packElement = document.querySelector('#pack-select');
let price = document.querySelector('#inlineprice'); 

//source summer course slides for for loop set up 
for (let i in glazingDictionary){ //iterate over each object
  let glazeoption = document.createElement("option"); //creates option element and assigns it to glazeooption
  glazingElement.add(glazeoption); //adding elements one by one
  glazeoption.innerHTML = glazingDictionary[i].name; //glazingDictionary[original] = "keep original"
  // glazeoption.value = glazingDictionary[i].value; //glazingDictionary[original] = 0.00
}

for (let i in packDictionary){ 
  let packoption = document.createElement("option");
  packElement.add(packoption);
  packoption.innerHTML = packDictionary[i].name;
  //packoption.value = packDictionary[i].value; 
}

const queryString = window.location.search; 
const params = new URLSearchParams(queryString); //parses string to access values
const rollType = params.get('roll');//gets value of roll from URL

const rollTitle = document.querySelector('#imagetitle'); 
rollTitle.innerText = rollType + ' Cinnamon Roll'; 

const rollImage = document.querySelector('#cartitem');
rollImage.src = '../assets/products/' + rolls[rollType].imageFile; 

//take the HTML elements and we want them to react on change (event type) and when changed, activate functions
glazingElement.addEventListener("change", glazingChange);
packElement.addEventListener("change", packChange);

let newbase = rolls[rollType]['basePrice'];
let glazePrice = 0; 
let totalPrice = 0; 
let packSize = 1;

displayPrice(updatePrice());

//when change event happens, we want to update glazePrice to whatever the value is gonna be
//source for parseFloat: stackoverflow when looking up NaN error
function glazingChange() {
  for (const element in glazingDictionary){
    if (glazingElement.value === glazingDictionary[element].name) {//not variable value but the actual dropdown value
      glazePrice = glazingDictionary[element].value; 
    }
  }
  // console.log(glazingElement.value);
  glazePrice = parseFloat(glazePrice); 
  // console.log(glazePrice);
  displayPrice(updatePrice()); 
}

function packChange(){
  let packSize = packElement.value; 
  //console.log(packSize);
  displayPrice(updatePrice()); 
}

//source: stackoverflow to look up for loop to access dictionary values using element when showing error for packsize
function updatePrice(){
  let packSizeValue;
  for (const element in packDictionary){
    if (packDictionary[element].name === packElement.value) {
      packSizeValue = packDictionary[element].value;
      //console.log(element);
      //console.log(packSizeValue);
    }
  }
  packSize = packSizeValue;
  totalPrice = (newbase + glazePrice)*packSize; 
  // console.log(totalPrice);
  return totalPrice; 
}

updatePrice();

function displayPrice(totalPrice){
  price.textContent = "$ " + totalPrice.toFixed(2);
}

updatePrice();

//HW 6: 

function loadFromLocalStorage() {
  const cartString = localStorage.getItem('storedCart');
  if (cartString) {
    cart.push(...JSON.parse(cartString)); 
  }
}
loadFromLocalStorage();

//source: summer course lecture on array push and addEventListener
const cartButton = document.querySelector('#cartbutton');
cartButton.addEventListener("click", function(){
  console.log('cart before', cart)
  const glazing = glazingElement.value; 
  const pack = packElement.value; 
  const newRoll = new Roll(rollType, glazing, pack, newbase);
  cart.push(newRoll);
  console.log('cart after', cart)
  saveToLocalStorage();
});

//cart has to come from local storage//

function saveToLocalStorage(){ 
  const cartString = JSON.stringify(cart);
  localStorage.setItem('storedCart',cartString); 
  
}

