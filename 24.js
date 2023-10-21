// innerHTML
let a = document.getElementsByTagName('div')[0];
a.innerHTML = a.innerHTML+"<h1>Hello world</h1>";

// more ways =>

// createElement
let div = document.createElement('div');
div.innerHTML = "<h1>Hello people</h1>";
// a.appendChild(div);

// append => append end of the node
// a.append(div);

// prepend => append start of the node
// a.prepend(div);

// before =>  insert before node
// after => insert after node

// replaceWith
a.replaceWith(div);

// Insert adjacent html, element,text
let c = document.getElementById("second");
c.insertAdjacentHTML('beforeend','<div id="test">beforeend</div>');
// beforebegin
// afterbegin
// afterend