// qus 1 => Use logical operator to find whether the age of a person lies between 10 and 20?

// let age  = prompt("Enter Your age: ");
let age = 19;
// age = 17;
if(age>10 && age<20){
    console.log("Between 10 & 20");
}else{
    console.log("Not between 10 & 20");
}

// OR

console.log(age>=10 && age<=20);


// qus 2 => Demonstrate the use of switch case statements in javascript based on qus 1

switch(age){
    case 1:
        console.log("Not between 10 & 20");
        break;
    case 10:
        console.log("Not between 10 & 20");
        break;
    case 19:
        console.log("Between 10 & 20");
        break;
    case 21:
        console.log("Between 10 & 20");
        break;
    case 24:
        console.log("Between 10 & 20");
        break;
    default:
        console.log("Error404: not found");
}


// qus 3 => Write a javascript program to find whether a number is divisible by 2 and 3
// let num = prompt("Enter a number:");
let num = 8;
if(num%2==0 && num%3==0){
    console.log("Divisible by 2 & 3");
}else{
    console.log("Not Divisible by 2 & 3");
}


// qus 4 => Write a javascript program to find whether a number  is divisible by either 2 or 3

if(num%2==0 || num%3==0){
    console.log("Either divisible by 2 or 3");
}else{
    console.log("Not divisible by 2 or 3");
}


// qus 5 => Print "You can drive" or "You cannot drive" Based on age being greater than 18 using ternary operator.

age =19;
console.log(age>18?"You can drive":"You cannot drive");