// 1. Convert a String to a Number
const price = "200";

// Using parseInt()
const priceAsInt = parseInt(price);
console.log("Using parseInt():", priceAsInt); 

// Using Number()
const priceAsNumber = Number(price);
console.log("Using Number():", priceAsNumber); 

// Using + operator
const priceWithPlus = +price;
console.log("Using + operator:", priceWithPlus); 


// 2. Convert a Number to a String
const distance = 150;

// Using .toString()
const distanceAsString1 = distance.toString();
console.log("Using .toString():", distanceAsString1); 

// Using String()
const distanceAsString2 = String(distance);
console.log("Using String():", distanceAsString2);


// 3. Convert a String to a Decimal Number
const weight = "72.5";

// Using parseFloat()
const weightAsDecimal = parseFloat(weight);
console.log("Using parseFloat():", weightAsDecimal);
