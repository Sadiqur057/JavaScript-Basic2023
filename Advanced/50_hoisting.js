// declaring something in the bottom automatically declared in top before execution
// console.log(b)
console.log(a);
greet();
function greet(){
    console.log("Greetings");
}
var a = 10;
let b = 9;
// declaring with let and const will technically hoist but will be inside temporarily deadzone because value didnot initialized yet

const greetings=()=>{
    gm();
}
// function expression are not hoisted
const gm = ()=>{
    console.log("good morning")
}
greetings();