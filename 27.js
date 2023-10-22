let btn = document.getElementById("btn");
let x = ()=>{
    alert("Hello world 1");
}
let y = ()=>{
    alert("Hello world 2");
}
btn.addEventListener('click',x);
btn.addEventListener('click',y);

let a = parseInt(prompt("what is your fav number?"));
if(a==2){
    btn.removeEventListener('click',x);
}