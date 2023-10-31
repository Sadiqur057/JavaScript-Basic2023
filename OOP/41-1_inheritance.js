class Animal{
    constructor(name,color){
        this.name = name;
        this.color = color;
    }
    run(){
        console.log(this.name + " is running")
    }
    shout(){
        console.log(this.name + " is shouting")
    }
}

class Monkey extends Animal{
    eat(){
        console.log(this.name+ " is eating banana")
    }
    hide(){
        console.log(this.name+" is hiding")
    }
}

let a1 = new Animal("Bruno","white");
let b1 = new Monkey("Chimpu","brown")

a1.shout()
b1.shout()
// a1.eat() // throw error
b1.eat()
b1.hide()