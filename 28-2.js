// qus 1 => Write a program to show different alerts and change body color when different buttons are clicked
let intro = document.getElementById("intro");
let btn1 = document.getElementById("btn1");
btn1.onclick = () =>{
    let x =confirm("Do you want to change background color to Green?");
    if(x){
        document.body.style.background="green";
        intro.style.color = "white";
    }
} 
let btn2 = document.getElementById("btn2");
btn2.onclick = () =>{
    let x =confirm("Do you want to change background color to Red?");
    if(x){
        document.body.style.background="red";
        intro.style.color = "white";
    }
} 

let btn3 = document.getElementById("btn3");
btn3.onclick = () =>{
    let x =confirm("Do you want to change background color to Blue?");
    if(x){
        document.body.style.background="blue";
        intro.style.color = "white";
    }
} 

 
// qus 2 => Create a website which is capable of storing bookmarks of your favourite website using href

// qus 3 => Repeat qus 2 using event listeners

// qus 4 => Write a javascript program to keep fetching contents of a website(every 5 second)

// qus 5 => Create a glowing bulb effect using classList toggle method is js