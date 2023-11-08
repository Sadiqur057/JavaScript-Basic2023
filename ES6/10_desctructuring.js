// unpacking array is destructuring
let arr = [3,5,4,9,7];
// let [x,,y] = arr;
let [x,,y,...rest] = arr;
console.log(x,y,rest)

// object destructuring
let obj1 = {
     name: "Sadiqur rahman",
     age: 23,
     dept: "CSE",
     email: "Sadiqur057@gmail.com",
     info: function(){
        console.log(`My name is ${this.name} and I am ${this.age} years old`);
     }
}
let {email,...userInfo} = obj1;

console.log(email,userInfo)

// array destructuring based on keys and object based on keys