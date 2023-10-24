setTimeout(()=>{
    console.log("Hacking your username....... please wait");
},1000)

try{
    setTimeout(()=>{
        console.log("Your username is: "+ username)
    },4000)
}catch(error){
    console.log("username cannot be fetched. security warning: "+error);
}

setTimeout(()=>{
    console.log("Hacking your password....... please wait");
},5000)

try{
    setTimeout(()=>{
        console.log("Your password is: "+ password)
    },8000)
}catch(error){
    console.log("password cannot be fetched. security warning: "+error);
}
