// toString() => return string;
let numbers = [1,2,3,4,5,9,11];
let convertedString = numbers.toString();
console.log(convertedString);
console.log(typeof convertedString);

// join = use to change format, return string
let joinedString = numbers.join("and");
console.log(joinedString);
console.log(typeof joinedString);

//  pop = remove last elements
// we can check removed element
let removedElements = numbers.pop();
console.log(`New array = ${numbers} and removed element is ${removedElements}`);
