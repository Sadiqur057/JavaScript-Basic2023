// primitive data types - 7
// nn bb ss u
// null, number
// boolean, BigInt,
// string, symbol
// undefined
let a = null; // null
let b = 345; // number
let c = true; // boolean
let d = BigInt("567"); // BigInt
let e = "Sadiqur Rahman"; // string
let f = Symbol("I am a nice symbol"); // symbol
let g ; // undefinedd
console.log(a,b,c,d,e,f,g,);
console.log(typeof g);
// Non primitive data types - 1
// Object

const person={
    fname: "Sadiqur",
    lname: "Rahman",
    age:23,
    dept: "CSE"
};
console.log(person);
console.log(typeof person);

// accessing objects
console.log("Accessing Objects");
console.log(person["fname"]);
console.log(person["dept"]);