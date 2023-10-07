// Variable => A container that stores value, A symbolic name for a value or data storage location that can change during the execution of a program

// JS is Dynamically Typed Language => We can change variable type in runtime

// Declare a variable
// let = block scoped variables
// block scoped variables=> the variable is only accessible and visible within the block in which it is declared, as well as any inner blocks, but it is not accessible outside of those blocks.
{
    let blockVar= "This is a block scoped variable";
}
// const = constant variables
// console.log(blockVar); 
// Err=> as blockVar is declared inside block, it will show error
var a = 67; // old
let b= 24; // new
// a,b => identifier
// = is a assignment operator
// 67,24 is value;
let full_name = "Sadiqur Rahman";
let department = "CSE";
let age;
const pi = 3.1416;
age= 23;
age=24;
// we can change value of variable except const variable.
console.log(a,b,full_name,department,age,pi);