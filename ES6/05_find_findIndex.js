let arr = [11,10,30,23,5,10,99,60,87];

let res = arr.find(function(item){
    return item<50;
})
console.log(res);

res = arr.findIndex(function(item){
    return item>50;
})
console.log(res);

// using arrow function
res = arr.findIndex((item)=>item>50)
console.log(res);

// function can be passed inside of find
function customFind(item){
    return item<50 && item>20
}
console.log(arr.find(customFind))
