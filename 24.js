// innerHTML
let a = document.getElementsByTagName('div')[0];
a.innerHTML = a.innerHTML+"<h1>Hello world</h1>";

// more ways =>

// createElement
let div = document.createElement('div');
div.innerHTML = "<h1>Hello people</h1>";
a.appendChild(div);

