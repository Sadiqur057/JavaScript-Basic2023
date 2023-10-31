class Animal{
    constructor(name){
        this._name = name;
    }
    fly(){
        console.log(`${this.name} is flying`);
    }
    get name(){
        return this._name;
    }
    set name(animalName){
        this._name = animalName;
    }
}


class Rabbits extends Animal{
    eat(){
        console.log("rabbit is eating")
    }
}

let a = new Animal ("Eagle");
let b = new Rabbits ();
a.fly();
b.eat();
// instance of class
console.log(a instanceof Rabbits);
console.log(b instanceof Animal);