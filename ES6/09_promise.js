// // A Promise is an object that returns a value which you hope to receive later, but not now

// let p1 = new Promise((resolve,reject)=>{
//     setTimeout(()=>{
//         resolve("The promise has been resolved")
//     },1000)
// })

// // p1.then((item)=>{
// //     console.log(item);
// // })

// let p2 = new Promise((resolve,reject)=>{
//     setTimeout(()=>{
//         // reject(new Error("The promise has been rejected"));
//         resolve("Resolved");
//     },2000)
// })

// p2.then((item)=>{
//     console.log(item);
// }).catch((err)=>{
//     console.log(err);
// })


//promise chaining => result of one promise resolved in another promise
// let data = fetch("https://dummy.restapiexample.com/api/v1/employees");

// data.then((item)=>{
//     return item.json();
// }).then((result)=>{
//     console.log(result)
// }).finally(()=>{
//     console.log("The finally block will be executed, even if there is error")
// })

// promise.all,setled,race,any
let p1 = new Promise((resolve,reject)=>{
    setTimeout(()=>{
        resolve("The promise has been resolved")
    },1000)
})
let p2 = new Promise((resolve,reject)=>{
    setTimeout(()=>{
        // reject(new Error("The promise has been rejected"));
        resolve("Resolved");
    },2000)
})
let res = Promise.all([p1,p2]);
res.then((item)=>{
    console.log(item);
})