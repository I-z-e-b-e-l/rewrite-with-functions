// DIRECTIONS
// Rewrite the following pieces of code from the last unit, but use functions when possible. 

//Uncomment out the code provided below, or use your own solutions from the classwork assignments last week (periods 1-2 in Unit 4.2: Decision Making)

// Temp Coversion App 🌡️:

function getTemp (tempF){
    return (tempF-32)*(5/9);
}

let tempF = Number(prompt(`What is the temperature in Fahrenheit?`));

let whatisit = `${tempF} degrees in Fahrenheit is ${getTemp(tempF)} degrees in celcius!`;
let message = "";

if(tempF < 69) {
    message = `🐧 Brrrr! It's cold in here! 🥶❄️☃️`;
    document.getElementById('dothething').innerHTML = whatisit;
    document.getElementById('dotheotherthing').innerHTML = message;
}else if (tempF>=69){
    message = `Mmmmm... temperature is just right 😁`;
    document.getElementById('dothething').innerHTML = whatisit;
    document.getElementById('dotheotherthing').innerHTML = message;
}else {
    message = `That's not a number! Refresh and try again!`;
    alert(message);
}



//Shopping Cart App 🛒 :
const userName = prompt("Welcome to the shopping cart! Whats your name?");

function getTotal (item1price, item2price, item3price) {
    return (item1price+item2price+item3price)*1.0625;
}

const item1 = prompt("Item 1 name:");
let item1price = Number(prompt(`${item1} price:`));

const item2 = prompt("Item 2 name");
let item2price = Number(prompt(`${item2} price:`));

const item3 = prompt("Item 3 name");
let item3price = Number(prompt(`${item3} price:`));

if (!item1price || item1price == 0) {
    item1price = Number(prompt(`${item1} price is not valid, please enter a price`));
}
if (!item2price || item2price == 0) {
    item2price = Number(prompt(`${item2} price is not valid, please enter a price`));
}
if (!item3price || item3price == 0) {
    item3price = Number(prompt(`${item3} price is not valid, please enter a price`));
}

document.getElementById('total').innerHTML = `${userName}, your grand total is: $${(getTotal(item1price, item2price, item3price))}.`