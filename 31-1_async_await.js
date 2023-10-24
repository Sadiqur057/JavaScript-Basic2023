// we can make any function async and promises can be await inside the function
// async func return a promise


async function weather(){
    let weatherDhaka = new Promise((resolve,reject)=>{
        setTimeout(()=>{
            resolve("27deg");
        },1000);
    })
    
    let weatherPabna = new Promise((resolve,reject)=>{
        setTimeout(()=>{
            resolve("25deg");
        },3000);
    })
    weatherDhaka.then(alert);
    weatherPabna.then(alert);
}
console.log("Welcome to weather control room")
weather();
