// IIFE => immidiately invoked function that rusn as soon as it is defined
let a = ()=>{
    return new Promise((resolve,reject)=>{
    setTimeout(()=>{
        resolve(456)
    },1000)
})
}

//     Normal way
// let f = async()=>{
//     let b = await a()
//     console.log(b)
//     let c = await a()
//     console.log(c)
//     let d = await a()
//     console.log(d)
// }
// f()

// IIFE
(async()=>{
    let b = await a()
    console.log(b)
    let c = await a()
    console.log(c)
    let d = await a()
    console.log(d)
})()
// the memory reserved for b c d variables will be released after execution of the function