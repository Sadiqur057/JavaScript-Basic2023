let p1 = new Promise((resolve,reject)=>{
    console.log("Hello p1 not resolved yet")
    setTimeout(()=>{
        resolve(1);
    },2000);
});

p1.then(()=>{
    console.log("Hurray");
});

p1.then(()=>{
    console.log("congrats p1 is now resolved");
});

