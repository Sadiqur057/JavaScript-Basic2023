class Employee{
    login(){
        console.log("Employee has logged in");
    }
    logout(){
        console.log("Employee has logged out");
    }
    reqLeaves(leaves){
        console.log(`Employee has requested ${leaves} leaves`);
    }
}

class Programmer extends Employee{
    reqCoffee(x){
        console.log(`Employee has requested ${x} coffees`);
    }
    reqLeaves(leaves){
        super.reqLeaves(leaves+1);
        console.log("one extra leaves granted")
    }

}

let e1 = new Employee();
let e2 = new Programmer();
e1.login();
e1.reqLeaves(2);
e2.login();
e2.reqCoffee(1);
e2.reqLeaves(1);