// local storag is a web storage which are not send to browser with each request

let key = "name";
let value = "sadiq";
localStorage.setItem(key,value);
console.log(`The key is ${key} and the value is ${value}`);

let key2 = "age";
let value2 = 23;
localStorage.setItem(key2,value2);
console.log(`The key is ${key2} and the value is ${value2}`);

console.log(localStorage.length);

localStorage.removeItem("age");
console.log(localStorage.length);

console.log(localStorage.key(0));
// keys and values stored as a string


