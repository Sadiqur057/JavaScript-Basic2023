// qus 1 => What will the length of following string -> "har\""
console.log("har\"".length);
// Ans= 4


// qus 2 => Explore the includes. starts with & end with function of a string
let string = "Hello World";
console.log(string.includes("Hello"));

// qus 3 => Write a pogram to convert a given string to lowercase
string = "Hello World";
console.log(string.toLowerCase());


// qus 5 => Extract the amount out of the string -> "The price is 1000 BDT"
let price = "The price is 1000 BDT";
let start = price.indexOf("1000");
console.log(price.slice(start,start+4));


// qus 6 => Try to change the 4rth character of a given string. were you able to do it?
string = "Hello world";
string[0]="Y";
// The main string won't be changed
console.log(string[0]);

