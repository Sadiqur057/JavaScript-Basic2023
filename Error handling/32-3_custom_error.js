try{
    let age = prompt("Enter your age: ");
    age = Number.parseInt(age);
    if(age<=0){
        throw new ReferenceError("Age is not valid");
    }
}catch(error){
    alert(error);
}