// // Shallow copy
let obj = {
    name: 'peter'
}
// let user = obj; // references will be copied instead of value, changing any further to use will do the same to obj, to avoid this use Object.assign({},obj)
// let user = Object.assign({},obj)

// or usign spread

let user = {...obj}
user.name ="bruce";
console.log("obj: ",obj);
console.log("user: ",user);

// but when there is object inside of object then shallow copy wont work. that time wee need deep copy


// deep copy
let obj2 = {
    name : "sadiq" ,
    age: 23,
        address:{
        city: "Badda",
        state: "Dhaka"  
    }
}
let user2 = JSON.parse(JSON.stringify(obj2));
user2.address.city="SouthBadda";

console.log("obj2: ",obj2.address.city);
console.log("user2: ",user2.address.city);
// disadvantage => function or date inside the object will not be displayed
// solution is lodash
// use cdn of lodash in html
let user = _.cloneDeep(obj2)

// copy => object copy=> memory or value
// diff between shallow copy and deep copy
// shallow copy : main object copy
// nested copy : nested object