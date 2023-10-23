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
let b = setInterval(function(){
    alert("setInterval");
},3000);

let count =0;
const mul=(a,b)=>{
    document.write(a+b);
}
setInterval(mul,1000,3,4);

//clearInterval
clearInterval(b);

const interval = setInterval(()=>{
    document.write("interval running");
    count++;

    if(count==3){
        clearInterval(interval);
        document.write("interval closed");
    }
},3000);


