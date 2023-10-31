class Employee{
    constructor(name){
        this.name= name;
        console.log("Employee name: "+name)
    }
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
    // access parent constructor using super keyword- overriding constructor
    constructor(name){
        super(name)
    }
    reqCoffee(x){
        console.log(`Employee has requested ${x} coffees`);
    }
    // overriding method
    reqLeaves(leaves){
        super.reqLeaves(leaves+1);
        console.log("one extra leaves granted")
    }

}

let e1 = new Employee("sadiq");
let e2 = new Programmer("akash");
e1.login();
e1.reqLeaves(2);
e2.login();
e2.reqCoffee(1);
e2.reqLeaves(1);