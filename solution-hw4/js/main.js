// create objects within with key-value pairs with name and value 
let glazingDictionary = {
  original: {name: "Keep original", value: 0.00},
  sugar: {name: "Sugar milk", value: 0.00},
  vanilla: {name: "Vanilla milk", value: 0.50},
  chocolate: {name: "Double chocolate", value: 1.50}
};

let packDictionary = {
  one: {name: "1", value: 1},
  three: {name: "3", value: 3},
  six: {name: "6", value: 5},
  twelve: {name: "12", value: 10}
}; 

//three interactions: glaze, size, prices
//retrieve HTML elements so we can interact with them
let glazingElement = document.querySelector('#glazing-select'); 
let packElement = document.querySelector('#pack-select');
let price = document.querySelector('#inlineprice'); 

//take the HTML elements and we want them to react on change (event type) and when changed, activate functions
glazingElement.addEventListener("change", glazingChange);
packElement.addEventListener("change", packChange);

//source summer course slides for for loop set up 
for (let i in glazingDictionary){ //iterate over each object
  let glazeoption = document.createElement("option"); //creates option element and assigns it to glazeooption
  glazingElement.add(glazeoption); //adding elements one by one
  glazeoption.innerHTML = glazingDictionary[i].name; //glazingDictionary[original] = "keep original"
  glazeoption.value = glazingDictionary[i].value; //glazingDictionary[original] = 0.00
}

for (let i in packDictionary){ 
  let packoption = document.createElement("option");
  packElement.add(packoption);
  packoption.innerHTML = packDictionary[i].name;
  packoption.value = packDictionary[i].value; 
}