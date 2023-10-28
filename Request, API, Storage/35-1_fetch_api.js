// Network Request => JS can be used to send and retrive information from teh network when needed (AJAX)
// AJAX => asynchronouse Syntax JavaScript & XML

//fetch api =>  used to get data over the network
// return promise, and the promise resolve in another promise whose value is the final result

// let promise = fetch(url,[options])
// without option a get request is sent
let p = fetch("https://goweather.herokuapp.com/weather/bangladesh");
p.then((response)=>{

    // status code = 200
    // ok return true if status code between 200-299
    console.log(response.status);
    console.log(response.ok);
    console.log(response.headers);
    return response.json();
    // return response.text();
}).then((val2)=>{
    console.log(val2);
})

