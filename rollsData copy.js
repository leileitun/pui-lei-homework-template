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

//gets query string portion of URL and stores it
const queryString = window.location.search; 
const params = new URLSearchParams(queryString); //parses string to access values
const rollType = params.get('roll');//gets value of roll from URL

const rollTitle = document.querySelector('#imagetitle'); //selects imagetitle HTML and stores it in new variable to display title
rollTitle.innerText = rollType + ' Cinnamon Roll'; //updates text

const rollImage = document.querySelector('#cartitem');//select cartpic html and stores it in this variable
rollImage.src = '../assets/products/' + rollType + '-cinnamon-roll.jpg'; //load according to rolltype

// let glazingElement = document.querySelector('#glazing-select'); 
// let packElement = document.querySelector('#pack-select');
// let price = document.querySelector('#inlineprice'); 

// glazingElement.addEventListener("change", glazingChange);
// packElement.addEventListener("change", packChange);

// let glazePrice = 0;
// let totalPrice = 0;
// let packSize = 1;

// function updatePriceAgain(){
//     const glazing = glazingElement.value; 
//     const packsize = parseInt(packElement.value); 

//     const baseCost = rolls[rollType].basePrice;
//     const total = baseCost;

//     if (packsize === 3){
//         total = total*3; 
//     } else if (packsize === 6){
//         total = total*6; 
//     } else if (packsize === 12){
//         total = total*12; 
//     }
//     price.textContext = "$ " + total.toFixed(2);
// }

// updatePriceAgain();

// function glazingChange() {
//     glazePrice = parseFloat(glazingElement.value); 
//     console.log(glazePrice);
//     displayPrice(updatePrice()); 
// }
  
// function packChange(){
//     packSize = packElement.value; 
//     console.log(packSize);
//     displayPrice(updatePrice()); 
// }
  
// function updatePrice(){
//     let basePrice = rolls[rollType].basePrice;
//     totalPrice = (basePrice + glazePrice)*packSize; 
//     return totalPrice; 
// }
  
// function displayPrice(totalPrice){
//     price.textContent = "$ " + totalPrice.toFixed(2);
// }

// let addCartButton = document.querySelector('#cartbutton'); 

// // addCartButton.addEventListener("onclick", )

// class Roll {
//     constructor(rollType, rollGlazing, packSize, basePrice) {
//         this.type = rollType;
//         this.glazing =  rollGlazing;
//         this.size = packSize;
//         this.basePrice = basePrice;
//     }
// }


