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