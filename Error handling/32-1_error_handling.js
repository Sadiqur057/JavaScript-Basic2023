setTimeout(()=>{
    console.log("Hacking your username....... please wait");
},1000)

setTimeout(() => {
    try{
        console.log("Your username is: "+ username)
    }catch(error){
        console.log("Error! username cannot be fetched. security warning: "+error);
    } 
}, 3000);

setTimeout(()=>{
    console.log("Hacking your password....... please wait");
},5000)

setTimeout(() => {
    try{
        console.log("Your password is: "+ password)
    }catch(error){
        console.log("Error! password cannot be fetched. security warning: "+error);
    }
}, 7000);
