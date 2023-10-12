// toString() => return string;
let numbers = [1,2,3,4,5,9,11];
let convertedString = numbers.toString();
console.log(convertedString);
console.log(typeof convertedString);

// join = use to change format, return string
let joinedString = numbers.join("and");
console.log(joinedString);
console.log(typeof joinedString);

//  pop = remove the last elements
// pop() return popped element
let poppedElement = numbers.pop();
console.log(`New array after pop = ${numbers} and removed element is ${poppedElement}`);


//  push = add new elements in last index
// push() return array lenght
let arrayLength = numbers.push(99,56);
console.log(`New array after push = ${numbers} and the new length is ${arrayLength}`);

// shift => remove the first element of the arrray

let shiftedElement = numbers.shift();
console.log(`New array after shift = ${numbers} and shifted element is ${shiftedElement}`);

// shift => add new elements in the first element of the arrray

let unshiftedElement = numbers.unshift(14);
console.log(`New array after unshift = ${numbers} and the new length is ${unshiftedElement}`);

// delete => operator to delete specific index of array. It will make empty in that index but  It doesnot change in length.

console.log(numbers.length);
delete numbers [0];
console.log(numbers);
console.log(numbers.length);

numbers[0]= 11;
// concat => join two arrays;
let alphabets = ['a','b','c','d'];
let fruits = ['mango','apple','banana'];
let joinedArray = numbers.concat(alphabets,fruits);
console.log(joinedArray);

