// In programming we often take something and then extend it. for example we might want to Create a user object an "admin" and "guest" will be slightly modified varients of it

// prototype => js objects have a special property called prototype that is either null or references another object

let a = {
    myName: "akash",
    age: 23
}
console.log(a);// return a prototype
console.log(a.toString());
console.log(a.valueOf());

// when we try to read a property from a prototype and its missing, javaScript automatically takes it from the prototype. this is called " prototypal inheritance"

let p = {
    run: ()=>{
        alert("run");
    }
}

// we can set  prototype by setting __proto__. Now if we read a property from the object which is not in object and is present in the prototype, javascript will take it from prototype
a.__proto__=p;
a.run()
// if a has method run() then run method will execute from there. otherwise protoype will be searched for the method

p.__proto__ = {
    myName:"sadiq"
}

// console.log(p.myName)
console.log(a.myName)