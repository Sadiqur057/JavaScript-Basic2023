// Write a jacascript program to look like a hacker. Write an async function which will simply display the following output.

// Initializing hack program
// Hacking your username
// username found abc13
// conncecting to facebook

let messages = [
  "Initializing hack tool",
  "Connecting to facebook",
  "Connceting to server 1",
  "Connection failed. Retrying",
  "Connecting to server 2",
  "Connected successfully..",
  "Username found",
  "Fetching password",
  "Trying Bruteforce attack",
  "password matched",
  "Account is hacked"
]

const sleep = async (sec)=>{
  return new Promise((resolve,reject)=>{
    setTimeout(() => {
      resolve(true);
    }, sec*1000);
  })
}
let a = document.getElementById("title");
const showHack = async(msg)=>{
  await sleep(2);
  a.innerHTML +="<br>" +msg
}

(async()=>{

  for(i=0;i<messages.length;i++){
    await showHack(messages[i]);
  }

})()


// let p1 = () => {
//     return new Promise((resolve,reject)=>{
//   setTimeout(() => {
//     resolve(1);
//     a.innerHTML = "Initializing hack program";
//   }, 3000);
//   })
// };
// let p2 = () => {
//     return new Promise((resolve,reject)=>{
//   setTimeout(() => {
//     resolve(1);
//     a.innerHTML = "Hacking your username";
//   }, 3000);
//   })
// };
// let p3 = () => {
//     return new Promise((resolve,reject)=>{
//   setTimeout(() => {
//     resolve(1);
//     a.innerHTML = "Username found abc13";
//   }, 3000);
//   })
// };
// let p4 = () => {
//     return new Promise((resolve,reject)=>{
//   setTimeout(() => {
//     resolve(1);
//     a.innerHTML = "Connecting to facebook";
//   }, 3000);
//   })
// };

// let runHack = async () => {
//     let x1 = await p1();
//     let x2 = await p2();
//     let x3 = await p3();
//     let x4 = await p4();
// };
// runHack();
// // try to use HTML & styling if possible
