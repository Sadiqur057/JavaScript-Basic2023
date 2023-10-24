// we can make any function async and promises can be await inside the function
// async func return a promise
async function harry(){
    return 5;
}

harry().then((x)=>{
    alert(x);
})