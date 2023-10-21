// attributes
let first = document.getElementById("first");
console.log(first.attributes);

// getAttribute => find atribute name
let a = first.getAttribute("class");
console.log(a);

// hasAttribute => check  for exisiting of an attribute
let b = first.hasAttribute("class");
console.log(b);

// setAttribute
first.setAttribute("hidden","true");
let second = document.getElementById("second");
second.setAttribute("class","text-dark red");
 
// removeAttribute
second.removeAttribute("class");

// dataset
console.log(first.dataset);
console.log(first.dataset.game);