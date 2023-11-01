// global scope
// block scope
// function scope

let a = 8; // global scope

{
    let b = 7; // block scope
    console.log(a);
}

const  x=()=>{
    let x = 9 // function scope
    console.log(x);
}
x();