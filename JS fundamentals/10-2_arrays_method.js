// toString() => return string;
let numbers = [1,2,53,94,85,39,11];
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
// concat() => join two or more arrays, return new array
let alphabets = ['a','b','c','d'];
let fruits = ['mango','apple','banana'];
let joinedArray = numbers.concat(alphabets,fruits);
console.log(joinedArray);

// sort() => alphabetically sort array
joinedArray.sort();
console.log(joinedArray);

// sort => ascending
let compare = (a,b)=>{
    return a-b;
}
let ascSort=numbers.sort(compare);
// sort => descending
console.log(ascSort);

let compare2 = (x,y) => {
    return y-x;
}
let descSort = numbers.sort(compare2);
console.log(descSort);


// reverse()
alphabets.reverse();
console.log(alphabets);

// splice() = takes 3 arguements => (start index to add,how many elements remove, new elements to be added , and can be added more)
// return removed elements
let num = [1,2,3,4,5];
let splicedNum = num.splice(1,2,101,103,108);
console.log(`new array = ${num}, removed array elements are ${splicedNum}`);

// slice() => does not modify original array
let slicedArray = num.slice(2);
console.log(slicedArray);

let slicedArray2 = num.slice(2,5);
console.log(slicedArray2);
