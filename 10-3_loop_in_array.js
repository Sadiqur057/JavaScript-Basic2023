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


