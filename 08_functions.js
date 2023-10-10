// Function is a block of code designed to perform a particular task

const hello =()=>{
    console.log("Hello there!");
}
hello();
let x=7;
let y=9;
let z=6;

function getSum(a,b,c){
    console.log( `Sum of the numbers is ${a+b+c}`);
}
getSum(x,y,z);

function getAvg(a,b,c){
    console.log( `Averagge of the numbers is ${(a+b+c)/3}`);
}
getAvg(x,y,z);


const getMul = (a,b,c)=>{
    return a*b*c;
}
console.log(`Multiplication of number is ${getMul(x,y,z)}`);

