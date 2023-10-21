// tagName & nodeName => used to read tag name for element nodes
console.log(document.body.firstChild.tagName); // will return undefined for text
console.log(document.body.firstElementChild.tagName);
// tagName = only exists for element nodes
//nodeName = defined for array node (text, comment etc)
console.log(document.body.firstElementChild.nodeName);
console.log(document.body.firstChild.nodeName);
// console.log() =>  shows the element DOM tree

let x = document.getElementsByTagName("span")[0];
console.log(x);
console.log(document.body.firstChild.nodeName);
console.log(document.body.firstElementChild.nodeName);
// console.dir() => shows the element as an object with its properties
let y = document.getElementsByTagName("span")[0];
console.dir(y);
console.dir(document.body.firstChild.nodeName);
console.dir(document.body.firstElementChild.nodeName);

//22-2_innerHTML = the property works only for element nodes
let z = document.getElementById("first");
z.innerHTML = "This is a paragraph declared using innerHTML";


// outerHTML = the property contains the full HTML innerHTML + the element itself
// z.outerHTML = "<div>Hello changed using outerHTML</div>";

// data, nodeValue => return value
let a = document.body.firstChild;
let b = document.getElementById("first");
a.data;
a.nodeValue;

// textContent
b.textContent;

// hidden
let c = document.getElementById("hidden") ;
c.hidden= false;
