// Destructuring assignment is used to unpack values from an array or properties from objects, into distinct variables

let arr = [3,5,8,12,23,15];
let [c,d]  = arr;
console.log(c,d);
// let [a,b, ...rest]  = arr
// console.log(a,b,rest)
let [e, ,f , ...rest] = arr;
console.log(e,f,rest);

// object
let {x,y} = {x:1,y:2};
console.log(x,y);

 