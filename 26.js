document.write("Hello");
// setTimeout()
let a = setTimeout(function(){
    alert("I am inside the setTimeout");
},2000)

// clearTimeout() => clear timeout
clearTimeout(a);

const sum = (a,b) =>{
    console.log("running"+ (a+b));
    a+b;
}

setTimeout(sum,1000,1,2);

// setInterval()
setInterval(function(){
    alert("setInterval");
},30000);
