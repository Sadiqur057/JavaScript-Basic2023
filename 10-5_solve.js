// // qus 1 => Create an array of numbers and take input from the user to add numbers to this array
// let arr = [1,2,3];
// // arr[arr.length+1]=parseInt(prompt("Enter a number :")) ;
// let a = parseInt(prompt("Enter a number"));
// arr.push(a);


// // qus 2 => Keep adding numbers to the array in qus 1 until 0 is added to the array.

// while(a!=0){
//     a = parseInt(prompt("Enter a number"));
//     arr.push(a);
// }
// console.log(arr);

// qus 3 => filter for numbers divisible by 10 from a given array

// let arr2 = [10,23,20,30,13,50,100];
// let filterFunc = ((x)=>{
//     if(x%10==0){
//         return x;
//     }
// })
// let x = arr2.filter(filterFunc);
// console.log(x);

// or

let x = arr2.filter((x)=>{
    if(x%10==0){
        return x;
    }
})
console.log(x);
// qus 4 => Create an array of square of given numbers

// qus 5 => use reduce to calculate factorial of a given number from an array of first n natural numbers ( n being the number whose factorial need to be calculated)