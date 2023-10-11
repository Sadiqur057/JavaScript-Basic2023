// qus 1 => Write a program to print the marks of a student in an object using for loop

let students = { sadiq : 98 , mahin : 95 , hridoy : 87 , hemel : 97 };

for(let i=0; i<Object.keys(students).length;i++){
    console.log(`The marks of ${Object.keys(students)[i]} is ${Object.values(students)[i]} `);
    // OR
    // is ${students[Object.keys(students)[i]]}
}

// qus 2 => Write the program in qus 1 using for in loop

for(let stud in students){
    console.log(`Marks of ${stud} is ${students[stud]}`);
}

// qus 3 => write a program to find "try again" until the user enters the correct number
let winnerNum = 7;
let guessingNum =0;


while(guessingNum!=winnerNum){
    guessingNum = prompt("Enter number between 1 to 10: ");
    alert("Try again !");
}
alert("you have guessed the correct answer.");

// OR
while(guessingNum!=winnerNum){
    guessingNum = prompt("Enter number between 1 to 10: ");
    if(guessingNum!=winnerNum){
        alert("Wrong. Try again!")
    }
}
alert("you have guessed the correct answer.");




// qus 4 => write a function to find mean of 5 number

const getMean = (a,b,c,d,e) => {
    return `Mean of the numbers are : ${(a+b+c+d+e)/5}`;
}
console.log(getMean(5,4,6,7,3));
