// Always pass same reference function for add and remove
// addEventListener is used to assign multiple handlers to an event
let btn = document.getElementById("btn");
let x = (e)=>{
    alert("Hello world 1");

}
let y = (e)=>{
    alert("Hello world 2");
}
btn.addEventListener('click',x);
btn.addEventListener('click',y);

let a = parseInt(prompt("what is your fav number?"));
if(a==2){
    btn.removeEventListener('click',x);
}

// Event Object = when an event happens, the browser create an event object, puts details into it and passesit as an arguement to the handler

let z = (e)=>{
    alert("Hello world 1");
    console.log(e.target.value);
    console.log(e.target);
    console.log(e.type,e.clientX,e.clientY);
}
btn.addEventListener("click",z);
