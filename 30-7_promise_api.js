// Promise.all

let p1 = new Promise((resolve,reject)=>{
    setTimeout(()=>{
        resolve("value 1")
    },2000);
});
let p2 = new Promise((resolve,reject)=>{
    setTimeout(()=>{
        reject("value 2")
    },1000);
});
let p3 = new Promise((resolve,reject)=>{
    setTimeout(()=>{
        resolve("value 3")
    },3000);
});

// Promise.all()
// if one promise rejected then it will failed, no further promise will be executed
let promise_all = Promise.all([p1,p2,p3]);
promise_all.then((value)=>{
    console.log(value)
});

// Promise.all Settled()
// if one promise rejected then other promises will be executed
let promise_allSettled = Promise.allSettled([p1,p2,p3]);
promise_allSettled.then((value)=>{
    console.log(value)
});

