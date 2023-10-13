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
})
console.log(newArray);

