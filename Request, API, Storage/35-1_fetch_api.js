// Network Request => JS can be used to send and retrive information from teh network when needed (AJAX)
// AJAX => asynchronouse Syntax JavaScript & XML

//fetch api => return promise, used to get data over the network


// let promise = fetch(url,[options])
// without option a get request is sent
let p = fetch("https://goweather.herokuapp.com/weather/Ny");
p.then((val)=>{
    return val;
}).then((val2)=>{
    return val2.json;
})