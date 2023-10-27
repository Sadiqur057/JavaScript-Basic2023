// Write a jacascript program to look like a hacker. Write an async function which will simply display the following output.

// Initializing hack program
// Hacking your username
// username found abc13
// conncecting to facebook
let a = document.getElementById("title");

let p1 = () => {
    return new Promise((resolve,reject)=>{
  setTimeout(() => {
    resolve(1);
    a.innerHTML = "Initializing hack program";
  }, 3000);
  })
};
let p2 = () => {
    return new Promise((resolve,reject)=>{
  setTimeout(() => {
    resolve(1);
    a.innerHTML = "Hacking your username";
  }, 3000);
  })
};
let p3 = () => {
    return new Promise((resolve,reject)=>{
  setTimeout(() => {
    resolve(1);
    a.innerHTML = "Username found abc13";
  }, 3000);
  })
};
let p4 = () => {
    return new Promise((resolve,reject)=>{
  setTimeout(() => {
    resolve(1);
    a.innerHTML = "Connecting to facebook";
  }, 3000);
  })
};

let runHack = async () => {
    let x1 = await p1();
    let x2 = await p2();
    let x3 = await p3();
    let x4 = await p4();
};
runHack();
// try to use HTML & styling if possible
