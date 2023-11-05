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

// Spread syntax => Allows an iterable such as an array on string to b expanded in places where zero or more arguments are expected. In an object literal, the spread syntax enumerate the properties of an object and adds the key-value pairs to the object being created
let arr2 = [2,7,5];
let obj2 = {...arr2};
console.log(obj2); // {0:2,1:7,2:5}

const sum = (v1,v2,v3)=>{
    return v1+v2+v3;
}
console.log(sum(...arr2));

//
let info ={
    myName: "sadiq",
    age:23,
    dept:"cse"
}
console.log({...info, myName:"john"});
console.log(info);
