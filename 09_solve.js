// qus 1 => What will the length of following string -> "har\""
console.log("har\"".length);
// Ans= 4


// qus 2 => Explore the includes. starts with & end with function of a string
let string = "Hello World";
console.log(string.includes("Hello"));

console.log(string.startsWith("Hello"));

console.log(string.endsWith("World"));

// qus 3 => Write a pogram to convert a given string to lowercase
string = "Hello World";
console.log(string.toLowerCase());


// qus 5 => Extract the amount out of the string -> "The price is 1000 BDT"
let priceSlip = "The price is 1000 BDT";
let start = priceSlip.indexOf("1000");

let price= priceSlip.slice(start,start+4); // return string
// console.log(typeof price);
console.log(parseInt(price)); //return number
// console.log(typeof (parseInt(price)));


// qus 6 => Try to change the 4rth character of a given string. were you able to do it?
string = "Hello world";
string[3]="Y";
// The main string won't be changed because string is immutable
console.log(string[3]);

