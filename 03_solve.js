// qus 1 - solve
let username = "Sadiq";
let id = 57;
console.log(username+id);

// qus 2 - solve
console.log(typeof (username+id));

// qus 3 - solve
const aboutMe={
    myName : "Sadiqur Rahman",
    myBatch : "Sum-19",
    myDept : "CSE"
};

// aboutMe = 3;// not possible to change it
// console.log(aboutMe);

// qus 4 - solve
aboutMe["cgpa"]=3.48;
aboutMe["myBatch"]="Summer-19";
// Possible
// const aboutMe point an object that reserved in memeory. 
// aboutMe is a reference for the object. 
// we can change value inside the reference
// we can add change value key of the project
console.log(aboutMe);

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