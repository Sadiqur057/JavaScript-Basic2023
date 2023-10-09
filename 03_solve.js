// qus 1- Create a variable with string data type and add a nummber with it
// qus 1 - solve
let username = "Sadiq";
let id = 57;
console.log(username+id);

// qus 2- Use typeof operator to find the datatype of the string variable from the last qus.
// qus 2 - solve
console.log(typeof (username+id));


// qus 3- Create a const object in javascript. Can you change it later?
// qus 3 - solve
const aboutMe={
    myName : "Sadiqur Rahman",
    myBatch : "Sum-19",
    myDept : "CSE"
};

// aboutMe = 3;// not possible to change it
// console.log(aboutMe);


// qus 4- Try to add a new key to const object in qus 3, is it possible?
// qus 4 - solve
aboutMe["cgpa"]=3.48;
aboutMe["myBatch"]="Summer-19";
// Possible
// const aboutMe point an object that reserved in memeory. 
// aboutMe is a reference for the object. 
// we can change value inside the reference
// we can add change value key of the project



console.log(aboutMe);


// qus 5- write a program in js to create a word meaning of dictionary of 5 words
// qus 5 - solve
let myDict = {
    Hadudu: "National sports",
    Ilist : "National Fish",
    Jackfruit : "National Fruit",
    "Magpie-Robin" : "National Bird",
    "The water lily":"National Flower"
};

console.log(myDict['Magpie-Robin']);
console.log(myDict.Hadudu);
console.log(myDict["The water lily"]);