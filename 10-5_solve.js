// qus 1 => Create an array of numbers and take input from the user to add numbers to this array
let arr = [1,2,3];
// arr[arr.length+1]=parseInt(prompt("Enter a number :")) ;
let a = parseInt(prompt("Enter a number"));
arr.push(a);


// qus 2 => Keep adding numbers to the array in qus 1 until 0 is added to the array.

while(a!=0){
    a = parseInt(prompt("Enter a number"));
    arr.push(a);
}
console.log(arr);

// qus 3 => filter for numbers divisible by 10 from a given array

let arr2 = [10,23,20,30,13,50,100];
// let filterFunc = ((x)=>{
//     return x%10==0;
// })
// let x = arr2.filter(filterFunc);
// console.log(x);

// or

let x = arr2.filter((x)=>{
    return x%10==0;
})
console.log(x);
// qus 4 => Create an array of square of given numbers

let x2 = arr2.map((x)=>{
    return x*x;
})
console.log(x2);

// qus 5 => use reduce to calculate factorial of a given number from an array of first n natural numbers ( n being the number whose factorial need to be calculated)
let arr3 =[2,3,4,5];
x3 = arr3.reduce((x1,x2)=>{
    return x1*x2;
})
console.log(x3);