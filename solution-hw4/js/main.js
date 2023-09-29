// create objects within with key-value pairs with name and value 
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

const rollTitle = document.querySelector('#imagetitle'); //selects imagetitle HTML and stores it in new variable to display title
rollTitle.innerText = rollType + ' Cinnamon Roll'; //updates text

const rollImage = document.querySelector('#cartitem');//select cartpic html and stores it in this variable
rollImage.src = '../assets/products/' + rolls[rollType].imageFile; //load according to rolltype

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

function updatePrice(){
  let packSizeValue;
  //console.log(packElement.value);
  for (const element in packDictionary){
    if (packDictionary[element].name === packElement.value) {
      packSizeValue = packDictionary[element].value;
      //console.log(element);
      //console.log(packSizeValue);
    }
  }
  packSize = packSizeValue;
  //console.log(newbase);
  //console.log(glazePrice);
  // console.log(packSize)
  totalPrice = (newbase + glazePrice)*packSize; 
  // console.log(totalPrice);
  return totalPrice; 
}

updatePrice();

function displayPrice(totalPrice){
  price.textContent = "$ " + totalPrice.toFixed(2);
}

updatePrice();

class Roll {
    constructor(rollType, rollGlazing, packSize, basePrice) {
        this.type = rollType;
        this.glazing =  rollGlazing;
        this.size = packSize;
        this.basePrice = basePrice;
    }
}

const cartButton = document.querySelector('#cartbutton');
cartButton.addEventListener("click", function(){
  const glazing = glazingElement.value; 
  const pack = packElement.value; 
  const myArray = new Roll(rollType, glazing, pack, newbase);
  cart.push(myArray);
  console.log(cart);
});



