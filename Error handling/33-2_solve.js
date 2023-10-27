//  write a program to load a javascript file in a browser using promises, Use .then() to display an alert when the load is complete
const loadScript =(src)=>{
    return new Promise((resolve,reject)=>{
        script = document.createElement("script");
        script.src =src;
        document.body.appendChild(script);

        script.onload=()=>{
            resolve(1);
            console.log("Script Loaded");
        }
        script.onerror=()=>{
            console.log("Error occurred");
        }
    })
}

let p1 = loadScript("https://cdn.jsdelivr.net/npm/@popperjs/core@2.11.8/dist/umd/popper.min.js")
p1.then((value)=>{
    alert("Script loaded"+value);
})
// Write the same program from previous qus and use async/await syntax

// Create a promise which rejects after 3 seconds. use an async/await to get its value. Use a try catch to handle its error

// qus4 => Write a program using Promise.all() inside an async/ await to await 3 promises. Compare its result with the case where we await these promises one by one.