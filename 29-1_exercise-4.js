// Create a clock using setInterval and Date in JS. The date object can be used to get the date time, hours and seconds which can be updated using setInterval.

let a = new Date();
let h = a.getHours();
let m = a.getMinutes();
let s = a.getSeconds();
let d = a.getDate();
let month = a.getMonth()+1;
let year = a.getFullYear();
console.log(h,m,s,d);
document.getElementById("sec").innerHTML=s;
document.getElementById("min").innerHTML=m;
document.getElementById("hour").innerHTML=h;
document.getElementById("day").innerHTML=d;
document.getElementById("month").innerHTML=month;
document.getElementById("year").innerHTML=year;