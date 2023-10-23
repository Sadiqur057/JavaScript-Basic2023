// String method

// length
let myName = "Sadiq";
console.log(myName.length);

// toUpperCase() & toLowerCase() => convert
console.log(myName.toUpperCase());
console.log(myName.toLowerCase());



// replace() => replace string with another
// The replace() method replaces only the first match
let myDetails = "I am Sadiqur Rahman, studying CSE at East West University";
console.log(myDetails.replace("CSE","SE"));
let repString = myDetails.replace(/CSE/i,"SE"); // Case insensitive

// replaceAll() 
// /g indicate global flag
repString = myDetails.replaceAll(/CSE/g,"SE");

// concat() => merge two string
let myFriend = "Akash";
console.log(myName.concat(" is a friend of ",myFriend));


// trim() => clear all the space at starting and ending
// trimStart() & trimEnd;
let myBrother = "    sayfur    ";
console.log(myBrother.trim());
// trimStart() & trimEnd;
console.log(myBrother.trimStart());
console.log(myBrother.trimEnd());

// indexOf() => find position of particular string
console.log(myDetails.indexOf("CSE"));
//charAt() => find the character based on given index
console.log(myDetails.charAt("2"))


// slice(start, end) => support negative value. Negative value means start from the end backward.
console.log(myName.slice(2,-1)); 

// substring(start, end) => doesnot support negative value

console.log(myName.substring(1,4)); 


// substr(start, length) => start and take the amount of character given in the lenght

console.log(myName.substr(1,5));


// includes() =>  return boolean value - true/false
console.log(myDetails.includes("CSE"));

// startsWith()=> return boolean value - true/false
let string = "Hello World";
console.log(string.startsWith("Hello"));

// endsWith() =>  return boolean value - true/false
console.log(string.endsWith("World"));
