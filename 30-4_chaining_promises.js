let p1 = new Promise((resolve, reject) => {
  setTimeout(() => {
    console.log("resolved after 2 sec");
    resolve(56);
  }, 2000);
});

p1.then((value) => {
  console.log(value);
  let p2 = new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("promise 2");
    }, 2000);
  });
  return p2;
}).then((value) => {
  console.log("promises fulfilled");
  return 2;
}).then((value)=>{
    console.log("Finally we are done!");
})
