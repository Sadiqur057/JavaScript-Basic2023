let num = [121,232,312];
for(let i = 0; i<num.length;i++){
    // console.log(num[i]);
}
//forEach loop
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


