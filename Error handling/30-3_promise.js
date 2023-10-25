//  Promises are commonly used to manage asynchronous tasks and they can work parallely
let p1 = new Promise((resolve, reject) => {
  console.log("Promise 1 is pending");
  setTimeout(() => {
    resolve(true);
    // console.log("Promise 1 is fulfilled");
  }, 3000);
});
let p2 = new Promise((resolve, reject) => {
  console.log("Promise 2 is pending");
  setTimeout(() => {
    reject(new Error("Error arises in promise 2"));
  }, 3000);
});
p1.then((value) => {
  console.log(value);
});
p2.catch((error)=>{
    console.log("some error occured in p2");
});

let p3 = new Promise (resolve =>{
    setTimeout(()=>{
        resolve("done"),1000});
})
// p3.then(alert);

// without catch

p4 = new Promise((resolve,reject)=>{
    setTimeout(()=>{
        reject(new Error("an error occurrd"));
    },1000)
})

p4.then((value)=>{
    console.log(value)
},(error)=>{
    console.log(error)
})