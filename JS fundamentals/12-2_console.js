// console.log(console);
console.assert(5<2);  // if false then assertion failed
console.clear();
let obj = {
    a:1,
    b:2,
    c:3
}
console.table(obj);
console.warn("This is a warn");
console.info("This is a info");
console.table(console);

console.time("forLoop");
for(let i = 0; i<5;i++){
    console.log(i);
}
console.timeEnd("forLoop");

console.time("whileLoop");
let i = 0
while(i<5){
    console.log(i);
    i++;
}
console.timeEnd("whileLoop");

