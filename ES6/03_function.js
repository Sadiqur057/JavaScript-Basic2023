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

// arrow function
let item ={
    name: "sadiq",
    getName : function(){
        console.log("normalFunc",this)
    },
    getNameArrow : ()=>{
        console.log("arrowFunc",this)
        // doesnot have any own this, use parent class this
        // also donot required using return
    }
}
item.getName();
item.getNameArrow();

// global function => can be used anywhere 
// isFinite,isNaN
isFinite(9/4); // a number
isNaN("anil"); // not a number


// Generator function => // a type of function that can be post or resumed
// yeild basically create steps
function * steps(){
    let a = 19;
    let b = 20;
    console.log(a+b);
    yield 'step 1 completed';
    console.log(a-b);
    yield 'step 2 completed';
    console.log(a*b);
    yield 'step 3 completed';
    console.log(a/b);
    yield 'step 4 completed';
}
let stp = steps();
function getSteps(){
    console.log(stp.next());
}