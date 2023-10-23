
const loadScript = (src)=>{
    return new Promise((resolve,reject) =>{
        let script = document.createElement("script");
        script.src = src;
        document.body.appendChild(script);
        script.onload=()=>{
            resolve("Script has been reloaded");
        }
        script.onerror=()=>{
            reject(0);
        }
    })
    
}
let p1 = loadScript("https://cdn.jsdelivr.net/npm/@popperjs/core@2.11.8/dist/umd/popper.min.js")

p1.then((value)=>{
    console.log("first promised executed");
}).then((value)=>{
    return loadScript("https://cdnn.jsdelivr.net/npm/@popperjs/core@2.11.8/dist/umd/popper.min.js");
}).catch((error)=>{
    console.log("Sorry we are facing some error");
});
