// two main properties of error object is name and message

try{
    abc
}catch(error){
    console.log(error);
    console.log(error.name); // error name is Reference error
    console.log(error.message); // error message is abc not defined
}


// customer error
try{
    console.log(xyz);
    throw new ReferenceError("please define xyz");
}catch(error){
    console.log(error);
    console.log(error.stack); 
    console.log(error.name); // error name is Reference error
    console.log(error.message); // error message is abc not defined
}

