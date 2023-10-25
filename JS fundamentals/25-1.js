// className
first.className = "red text-dark";
second.className = "green text-dark";
// classList
let cl = first.classList;
// document.getElementById("output").innerHTML=cl;
// classList.remove,add
cl.remove("text-dark");
cl.add("text-dark");

//toggle = if already present then remove or add when not present
cl.toggle("red");

// contains = to check if that is a class or not
let con = cl.contains("text-dark");
document.getElementById("output").innerHTML=con;