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
const rollType = params.get('roll');//gets value or roll from URL

const rollTitle = document.querySelector('#imagetitle'); //selects imagetitle HTML and stores it in new variable to display title
rollTitle.innerText = rollType + ' Cinnamon Roll'; //updates text

const rollImage = document.querySelector('#cartitem');//select cartpic html and stores it in this variable
rollImage.src = '../assets/products/' + rollType + '-cinnamon-roll.jpg'; //load according to rolltype

//get dropdown elements
// let glazingElement = document.querySelector('#glazing-select'); 
// let packElement = document.querySelector('#pack-select');
// let price = document.querySelector('#inlineprice'); 

//take the HTML elements and we want them to react on change (event type) and when changed, activate functions
glazingElement.addEventListener("change", glazingChange);
packElement.addEventListener("change", packChange);

function updatePriceAgain(){
    let glazing = glazingElement.value; 
    let packsize = parseInt(packElement.value); 

    let newBasePrice = rolls[rollType].basePrice;
    let total = newBasePrice;

    if (packsize === 3){
        total = total*3; 
    } else if (packsize === 6){
        total = total*6; 
    } else if (packsize === 12){
        total = total*12; 
    }
    price.textContext = total.toFixed(2);
}

updatePriceAgain();

let addCartButton = document.querySelector('#cartbutton'); 

// addCartButton.addEventListener("onclick", )

class Roll {
    constructor(rollType, rollGlazing, packSize, basePrice) {
        this.type = rollType;
        this.glazing =  rollGlazing;
        this.size = packSize;
        this.basePrice = basePrice;
    }
}


