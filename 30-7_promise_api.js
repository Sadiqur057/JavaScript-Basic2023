// Promise.all

let p1 = new Promise((resolve,reject)=>{
    setTimeout(()=>{
        resolve("value 1")
    },4000);
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

// Promise.allSettled()
// if one promise rejected then other promises will be executed
let promise_allSettled = Promise.allSettled([p1,p2,p3]);
promise_allSettled.then((value)=>{
    console.log(value)
});

// Promise.race()
// only show the fastest loaded promise
// doesnot work on error
let promise_race = Promise.race([p1,p2,p3]);
promise_race.then((value)=>{
    console.log(value)
});

// Promise.any()
// wait for the first promise
// doesnot wait for error, if all failed then show error as a aggregate error
let promise_any = Promise.any([p1,p2,p3]);
promise_any.then((value)=>{
    console.log(value)
});

// Promise.resolve
let resolved = Promise.resolve("resolved");
resolved.then((value)=>{
    console.log(value);
})

// Promise.reject
let rejected = Promise.resolve(new Error("rejected"));
rejected.then((value)=>{
    console.log(value);
})



