// static method are used to implement functions that belong to a class as a whole and not to any particular object

class Animal{
    constructor(name){
        this.name = Animal.capitalize(name);
    }
    walk(){
        console.log(`Animal ${this.name} is walking`)
    }
    static capitalize(name){
        return name.charAt(0).toUpperCase() + name.substr(1,name.length)
    }
}

let a = new Animal("tiger")
a.walk();