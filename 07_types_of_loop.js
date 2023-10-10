// for loop => loop a block of code based num of times given in conditions.
// Syntax => for(statement 1; statement 2; statement 3)
// statement1 executed once
// statement 2 is the condition based on which the loop runs( loop in the body executed)
// statement 3 is executed everytime the loop body is executed
let i=1;
let sum=0;
for(i;i<=3;i++){
    console.log(`For loop executing : ${i}`);
    sum+=i;
}
console.log(`Sum of the numbers ${sum}`);

// while loop => loops a block based on specific condition

// do while loop  => While loop variant which runs atleast once , even if the conditions are not met.

// for in loop => used to loop throuh the keys of an object

let students={
    sadiq: 93,
    rayhan: 89,
    sakib: 91,
    mahadi: 94
}
let totalMarks = 0;
let numofStud=0;
for(stud in students){
    console.log(`Student name: ${stud}. Marks: ${students[stud]}`);
    marks = parseInt(students[stud]);
    totalMarks+= marks;
    numofStud+=1;
}
console.log(`Total Marks: ${totalMarks}`);
avgMarks = totalMarks/numofStud;
console.log(`Average mark: ${avgMarks}`);

// for of loop => used to loop  through the values of the object
