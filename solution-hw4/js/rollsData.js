const rolls = {
    "Original": {
        "basePrice": 2.49,
        "imageFile": "original-cinnamon-roll.jpg"
    },
    "Apple": {
        "basePrice": 3.49,
        "imageFile": "apple-cinnamon-roll.jpg"
    },
    "Raisin": {
        "basePrice": 2.99,
        "imageFile": "raisin-cinnamon-roll.jpg"
    },
    "Walnut": {
        "basePrice": 3.49,
        "imageFile": "walnut-cinnamon-roll.jpg"
    },
    "Double-Chocolate": {
        "basePrice": 3.99,
        "imageFile": "double-chocolate-cinnamon-roll.jpg"
    },
    "Strawberry": {
        "basePrice": 3.99,
        "imageFile": "strawberry-cinnamon-roll.jpg"
    }    
};

const cart = []; 

const queryString = window.location.search; 
const params = new URLSearchParams(queryString); //parses string to access values
const rollType = params.get('roll');//gets value of roll from URL

const rollTitle = document.querySelector('#imagetitle'); //selects imagetitle HTML and stores it in new variable to display title
rollTitle.innerText = rollType + ' Cinnamon Roll'; //updates text

const rollImage = document.querySelector('#cartitem');//select cartpic html and stores it in this variable
rollImage.src = '../assets/products/' + rollType + '-cinnamon-roll.jpg'; //load according to rolltype

//take the HTML elements and we want them to react on change (event type) and when changed, activate functions
glazingElement.addEventListener("change", glazingChange);
packElement.addEventListener("change", packChange);

let glazePrice = 0; 
let totalPrice = 0; 
let packSize = 1;

//when change event happens, we want to update glazePrice to whatever the value is gonna be
//source for parseFloat: stackoverflow when looking up NaN error
function glazingChange() {
  glazePrice = parseFloat(this.value); 
  console.log(glazePrice);
  displayPrice(updatePrice()); 
}

function packChange(){
  packSize = this.value; 
  console.log(packSize);
  displayPrice(updatePrice()); 
}

let newbase = rolls[rollType]['basePrice'];

function updatePrice(){
  totalPrice = (newbase + glazePrice)*packSize; 
  return totalPrice; 
}

updatePrice();

function displayPrice(totalPrice){
  price.textContent = "$ " + totalPrice.toFixed(2);
}

updatePrice();


// // class Roll {
// //     constructor(rollType, rollGlazing, packSize, basePrice) {
// //         this.type = rollType;
// //         this.glazing =  rollGlazing;
// //         this.size = packSize;
// //         this.basePrice = basePrice;
// //     }
// // }

// // const cartButton = document.querySelector('#cartbutton');
// // cartButton.addEventListener("click",)



