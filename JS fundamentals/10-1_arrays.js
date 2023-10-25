// Arrays => collection of items, can be accessed by index and multiple variable, objects can be stored in single array.

let numbers = [91,92,83,74,85];
console.log(numbers[3]);
console.log(numbers.length);

let fruits = ["banana","mango","apple", undefined];
console.log(fruits);
// arryas are mutable => arrays can be changed
fruits[3]= "jackfruit";
console.log(fruits);

// using loop in array
for(let i = 0; i<fruits.length; i++){
    console.log(fruits[i]);
}

// type of array is object
console.log(typeof fruits);

