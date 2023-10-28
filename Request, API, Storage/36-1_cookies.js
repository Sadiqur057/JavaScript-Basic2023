console.log(document.cookie);
// document.cookie is a set call
document.cookie= "name=sadiq";
document.cookie= "age=23";
document.cookie= "dept=cse";
document.cookie= "dept=se"; // it will replace the last dept value
let key = "$3536%";
let value = "$3536%";
document.cookie = `${encodeURIComponent(key)}=${encodeURIComponent(value)}`
console.log(document.cookie);
// to decode the component
let x = "%243536%25"
console.log(decodeURIComponent(x));

// note
// should not exceed 4kb
// total number cookies around 20+/-

