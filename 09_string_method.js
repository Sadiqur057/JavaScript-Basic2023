// String method

// length
let myName = "Sadiq";
console.log(myName.length);

// toUpperCase() & toLowerCase() => convert
console.log(myName.toUpperCase());
console.log(myName.toLowerCase());

// Slice() => slice a string
console.log(myName.slice(1,4)); 

// replace() => replace string with another
let myDetails = "I am Sadiqur Rahman, studying CSE at East West University";
console.log(myDetails.replace("CSE","SE"));

// concat() => merge two string
let myFriend = "Akash";
console.log(myName.concat(" is a friend of ",myFriend));

// trim() => clear all the space at starting and ending
let myBrother = "    sayfur    ";
console.log(myBrother.trim());

// indexOf() => find position of particular string
console.log(myDetails.indexOf("CSE"));