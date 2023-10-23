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

let google = document.getElementById("google");
google.onclick = () =>{
    window.location.href = "https://google.com";
}

let fb = document.getElementById("fb");
fb.onclick = () =>{
    window.location.href = "https://fb.com";
}

let twitter = document.getElementById("twitter");
twitter.onclick = () =>{
    window.location.href = "https://twitter.com";
}


// qus 3 => Repeat qus 2 using event listeners

// document.getElementById("google").addEventListener('click',()=>{
//     var url = "https://google.com";
//     var win =window.open(url,"_blank");
//     win.focus;
// })
google = document.getElementById("google");
let x = () =>{
    var url = "https://google.com";
    window.open(url, "_blank");
}
google.addEventListener('click',x);

fb = document.getElementById("fb");
let y = () =>{
    var url = "https://fb.com";
    window.open(url, "_blank");
}
fb.addEventListener('click',y);

twitter = document.getElementById("twitter");
let z = () =>{
    var url = "https://twitter.com";
    window.open(url, "_blank");
}
twitter.addEventListener('click',z);

// qus 4 => Write a javascript program to keep fetching contents of a website(every 5 second)

let displayCurrTime =() =>{
    const currTime = new Date();
    const timeDisplay = currTime.toLocaleTimeString();
    document.getElementById('time').innerHTML = timeDisplay;
}
setInterval(displayCurrTime,1000);

// qus 5 => Create a glowing bulb effect using classList toggle method in js
let box = document.getElementById("box");
let a = box.classList ;
let randomClick = document.getElementById("toggle");
randomClick.onclick =()=>{
    a.toggle("bulb");
}
let turnOn = document.getElementById("on");
turnOn.onclick=()=>{
    a.add("bulb");
}
let turnOff = document.getElementById("off");
turnOff.onclick=()=>{
    a.remove("bulb");
}