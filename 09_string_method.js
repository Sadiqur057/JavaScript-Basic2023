// String method

// length
let myName = "Sadiq";
console.log(myName.length);

// toUpperCase() & toLowerCase() => convert
console.log(myName.toUpperCase());
console.log(myName.toLowerCase());



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

// Substrings



// slice(start, end) => support negative value. Negative value means start from the end backward.
console.log(myName.slice(2,-1)); 

// substring(start, end) => doesnot support negative value

console.log(myName.slice(1,4)); 


// substr(start, length) => start and take the amount of character given in the lenght

console.log(myName.substr(1,5));
