let num = [121,232,312];
for(let i = 0; i<num.length;i++){
    // console.log(num[i]);
}
//forEach loop
// can take 3 arguements = value,index,array
num.forEach(function(element){
    console.log(element);
})

//OR 

num.forEach((element)=>{
    console.log(element);
})

const fruits = ["apple", "banana", "cherry", "date"];

fruits.forEach(function(fruit, index) {
  console.log(`Fruit at index ${index} is ${fruit}`);
});

// Array.from() => create array from string
let myName = "Sadiq akash";
let arr = Array.from(myName);
console.log(arr); 

// for..of
for (let i of num){
    console.log(i);
}

// for..in
for (let i in fruits){
    console.log(fruits[i]);
}

// map() =>  new array can be created 
// can take 3 arguements = value,index,array
arr = [43,56,90];
let newArray = arr.map((value,index,array)=>{
    console.log(value,index,array);
    return value+1;
});
console.log(newArray);

// Array filter method =>  doesnot change original array. create a new array and filter out
let arr2 = [34,2,53,9,5,32,26];
a2 = arr2.filter((value)=>{
    return value>10;
});
console.log(a2);

// Reduce method =>  return string/number
let arr3 = ['a','b','c',[1,2,3]];
let a3 = arr3.reduce((v1,v2)=>{
    return v1+v2;
});
console.log(a3,typeof a3);



// another way

const reduceFunc = (x,y)=>{
    return x+y;
} 
let a4 = arr3.reduce(reduceFunc);
console.log(a4);

const stud = [
    { name: 'Alice', age: 25 },
    { name: 'Charlie', age: 30 },
    { name: 'Bob', age: 25 },
    { name: 'David', age: 30 },
    { name: 'Eve', age: 25 },
];

const result = stud.reduce((val, index) => {
    if (!val[index.age]) {
        val[index.age] = [];
    }
    val[index.age].push(index.name);
    return val;
}, {});

console.log(result);
