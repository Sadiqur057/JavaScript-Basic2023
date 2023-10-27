try{
    let a = 0;
    console.log("Executed successfully")
}catch(err){
    console.log("Error occured")
}finally{
    console.log("finally clause executed even if any error occured");
    // close the file
    // exit loop
    // write to the log file

}

const myFunc =() =>{
    try{
        let a = 0;
        console.log("Executed successfully [inside func]")
        return;
    }catch(err){
        console.log("Error occured [inside func]")
    }finally{
        console.log("finally clause executed even if any error occured or return called in try block [inside func]");
        
    
    }
    
}
myFunc();
