// allows us to quickly copy all or part of an existing array or object into another array or object.

let fruits = ['apple','banana','kiwi'];
let otherFruits = ['lichi','mango','jackfruit']
let merged = ['apple',...otherFruits,'banana']
console.log(merged);
function print(a,b){
    console.log(a,b);
}
print(...fruits);
let allFruits = [...fruits,...otherFruits];
console.log(allFruits);

// copying without using same reference
let newFruits = [...fruits];
newFruits.push("test");
console.log(newFruits);
console.log(fruits);

// merge copy merge
// difference between rest and spread
// spread is used to pass parameters
// rest is used to get parameters
// reference break