// //  write a program to load a javascript file in a browser using promises, Use .then() to display an alert when the load is complete
// const loadScript =(src)=>{
//     return new Promise((resolve,reject)=>{
//         script = document.createElement("script");
//         script.src =src;
//         document.body.appendChild(script);

//         script.onload=()=>{
//             resolve(1);
//             console.log("Script Loaded");
//         }
//         script.onerror=()=>{
//             console.log("Error occurred");
//         }
//     })
// }

// let p1 = loadScript("https://cdn.jsdelivr.net/npm/@popperjs/core@2.11.8/dist/umd/popper.min.js")
// // p1.then((value)=>{
// //     alert("Script loaded"+value);
// // })
// // Write the same program from previous qus and use async/await syntax
// const loadScript2 = async(src)=>{
//     return new Promise((resolve,reject)=>{
//         script = document.createElement("script");
//         script.src =src;
//         document.body.appendChild(script);

//         script.onload=()=>{
//             resolve(1);
//             console.log("Script Loaded2");
//         }
//         script.onerror=()=>{
//             console.log("Error occurred2");
//         }
//     })
// }

// const mainFunc = async()=>{
//     let a = await loadScript2("https://cdn.jsdelivr.net/npm/@popperjs/core@2.11.8/dist/umd/popper.min.js")
//     console.log(a);
//     console.log(Date());
// }
// mainFunc();

// Create a promise which rejects after 3 seconds. use an async/await to get its value. Use a try catch to handle its error

const loadScript3 = async(src)=>{
    return new Promise((resolve,reject)=>{
        script = document.createElement("script");
        script.src =src;
        document.body.appendChild(script);
        script.onload=()=>{
            setTimeout(()=>{
                console.log(" Script 3 is loaded");
                resolve(0);
            },3000)
        }
        script.onerror=()=>{
            setTimeout(()=>{
                console.log("Error! Script 3 cannot be loaded");
                reject(1);
            },3000)
        }
    })
}

const myFunc2 = async()=>{
    try{
        let p3 = await loadScript3("https://cdnn.jsdelivr.net/npm/@popperjs/core@2.11.8/dist/umd/popper.min.js");
        console.log("completed");
    }catch(error){
        console.log("THis is an error : "+error);
    }
}
myFunc2();


// qus4 => Write a program using Promise.all() inside an async/ await to await 3 promises. Compare its result with the case where we await these promises one by one.