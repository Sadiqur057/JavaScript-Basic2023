// we can make any function async and promises can be await inside the function
// async func return a promise


async function weather(){
    let weatherDhaka = new Promise((resolve,reject)=>{
        setTimeout(()=>{
            resolve("27deg");
        },2000);
    })
    
    let weatherPabna = new Promise((resolve,reject)=>{
        setTimeout(()=>{
            resolve("25deg");
        },5000);
    })
    // weatherDhaka.then(alert);
    // weatherPabna.then(alert);
    console.log("Fetching Dhaka weather. Please wait");
    let wD = await(weatherDhaka);
    console.log("Fetched Dhaka weather : "+wD)

    console.log("Fetching Pabna weather. Please wait");
    let wP = await(weatherPabna);
    console.log("Fetched Pabna weather : "+wP)

    return[wD,wP];
}

const randFunc = async () =>{
    console.log("This is a random function");
}

const runMain = async () =>{
    console.log("Welcome to weather control room")
    let a = await weather();
    let b = await randFunc();
}
runMain();
