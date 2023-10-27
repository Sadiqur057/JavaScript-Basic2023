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

let p3 =()=>{
    return new Promise((reject,resolve)=>{
        setTimeout(()=>{
            reject(new Error("Rejected"));
        },1000)}
    )}

let a = async()=>{
    try{
        let c = await p3();
        console.log(c);
    }catch(err){
        console.log("THis is an error : "+err);
    }
}
a();


// qus4 => Write a program using Promise.all() inside an async/ await to await 3 promises. Compare its result with the case where we await these promises one by one.

let x = ()=>{
    return new Promise((resolve,reject)=>{
    setTimeout(()=>{
        resolve("Promise 1 resolved");
    },3000)
})
}
let y = ()=>{
    return new Promise((resolve,reject)=>{
    setTimeout(()=>{
        resolve("Promise 2 resolved");
    },1000)
})
}
let z = ()=>{
    return new Promise((resolve,reject)=>{
    setTimeout(()=>{
        resolve("Promise 3 resolved");
    },4000)
})
}



const myFunc3 = async()=>{
    // console.time("individual");
    // console.time("x");
    // let a = await x();
    // console.timeEnd("x")

    // console.time("y");
    // let b = await y();
    // console.timeEnd("y")

    // console.time("z");
    // let c = await z();
    // console.timeEnd("z");
    // console.timeEnd("individual");

    console.time("Promise_all");
    let a =  x();
    let b =  y();
    let c =  z();
    let abc = await Promise.all([x,y,z]);
    console.log(abc);
    console.timeEnd("Promise_all");
}
myFunc3();