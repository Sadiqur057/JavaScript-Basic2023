function add(a,b){
    return a+b;
}
console.log(add(10,40));

// inserting default parameter in function
// even a function can be passed

function sum(a,b=30){
    return a+b;
}
console.log(sum(10));