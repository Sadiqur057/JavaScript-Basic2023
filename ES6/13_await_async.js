async function getData(){
    let handlePromise = new Promise((resolve,reject)=>{
        setTimeout(()=>{
            resolve('All job is done')
        },2000)
    })
    let data = await handlePromise;
    console.log(data);
}
getData();

async function getAPI(){
    let data = await fetch("https://dummy.restapiexample.com/api/v1/employees")
    data = await data.json();
    console.log(data);
}
getAPI();