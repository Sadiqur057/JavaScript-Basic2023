// String => collection of character
// String used to manipulate and save text.
let myName = "Sadiq";
let myFriend = 'Akash';
console.log(myName);
console.log(myName.length);

// Single quotation can inside double quotation 
// let place = "Cox's Bazar";
// console.log(place);

// // Double quotation can inside  single quotation 
// place = '"Saint martin" could be a better choice';
// console.log(place);

// //  Escape Sequence Characters
// place = "Then Cox\'s Bazar";
// console.log(place);
// place = "\"Saint martin\" Also a better choice";
// console.log(place);

// More escape sequence character
let s1 = "This is first line \nThis is second line, \tanother text after tab";
console.log(s1);


let s2 = "Using carriage return \n Replaced text \rit moves the cursor back to the beginning of the current line, allowing you to overwrite characters from the beginning of the line";
console.log(s2);


// Template literals => With template literals, it is possible to use both single and double quotos inside a string
let info = `"Tamim" is best friend of 'Shakib'`;
console.log(info);

// String interpolation => variable ccan be inserted directly inside the template literal
let person1 = "Tamim";
let person2 = "Shakib";
// Tamim is a friend of Shakib
let sentence = `${person1} is a friend of ${person2}`;
console.log(sentence);

// String is Immutable. String cannot be changed. whenever string method used a new string is created to show the output. Lets try to change an index of string.
console.log(myName[0]);
myName[0]='r'; // no changes will be occured to original string.
console.log(myName[0]);
// console.log(myName[1]);
// console.log(myName[2]);

for(i=0; i<myName.length;i++){
    console.log(myName[i]);
}