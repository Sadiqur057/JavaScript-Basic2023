// Revisiting arrow function
const sayHello = () =>{
    console.log("Hello");
}
sayHello()

const sayHello2 = (userName) =>
    console.log("Hello "+userName);

sayHello2("Samir")

const sayHello3 = (greetings) =>
    console.log(greetings);

sayHello3("Good Morning");


const x = {
    myName: "sadiq",
    age: 23,
    dept: "cse",
    show: function(){
        console.log(`My name is ${this.myName}`);
        // let that = this
        // setTimeout(function(){
        //     console.log(`and I am  ${that.age} years old`);
        // }, 1000);
        setTimeout(() => {
            console.log(`and I am  ${this.age} years old`);
        }, 1000);
    }
}
x.show()