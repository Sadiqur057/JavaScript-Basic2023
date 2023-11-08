// difference between let and var
// let is a block scope variables
// var is global scope variables
console.log(b); // hoistin allowed with var
let a= 20;
{
    let a = 10;
}
console.log(a); // output 20

var b= 20;
{
    var b = 10;
}
console.log(b); // output 10

for (let i = 0; i<=5;i++){
    setTimeout(()=>{
        console.log(i); //0-5
    },1000)
}

for (var j = 0; j<=5;j++){
    setTimeout(()=>{
        console.log(j); //6
    },1000)
}
