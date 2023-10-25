// asynchronous actions: the actions that we initiate now and they finish later eg. setTimeout 
console.log("start");
setTimeout(() => {
    console.log("Asynchronous actions")
}, 3000);
console.log("end");


//Synchronous actions: the action that initiate and finish one by one
// example of synchronous actions
let a = prompt("what is your name?");
let b = prompt("what is your age?");
let c = prompt("what is your favourite color?");
console.log(a+" is "+b+" years old and "+c+" is his favourite color");