// String => collection of character
// String used to manipulate and save text.
let myName = "Sadiq";
let myFriend = 'Akash';
console.log(myName);
console.log(myName.length);

// Single quotation can inside double quotation 
let place = "Cox's Bazar";
console.log(place);

// Double quotation can inside  single quotation 
place = '"Saint martin" could be a better choice';
console.log(place);

//  Escape Sequence Characters
place = "Cox\'s Bazar";
console.log(place);

// Template literals => With template literals, it is possible to use both single and double quotos inside a string
let info = `"Tamim" is best friend of 'Shakib'`;
console.log(info);

// String interpolation => variable ccan be inserted directly inside the template literal
let person1 = "Tamim";
let person2 = "Shakib";
// Tamim is a friend of Shakib
let sentence = `${person1} is a friend of ${person2}`;
console.log(sentence);