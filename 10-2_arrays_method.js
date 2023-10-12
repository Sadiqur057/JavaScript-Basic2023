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
// we can check popped element
let poppedElement = numbers.pop();
console.log(`New array after pop = ${numbers} and removed element is ${poppedElement}`);


//  push = add new elements in last index
// we can check pushed element
let pushedElement = numbers.push(99,56);
console.log(`New array after push = ${numbers} and added element is ${pushedElement}`);
