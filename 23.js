// getAttribute => find atribute name
let first = document.getElementById("first")
let a = first.getAttribute("class");
console.log(a);

// hasAttribute => check  for exisiting of an attribute
let b = first.hasAttribute("class");
console.log(b);

// setAttribute
first.setAttribute("hidden","true");
