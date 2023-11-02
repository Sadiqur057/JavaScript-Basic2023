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

// difference between static and non static method
class A{
    static uprCase(x){
      console.log(x.toUpperCase())
    }
    lwrCase(y){
      console.log(y.toLowerCase())
    }
  }
  
  A.uprCase('abc')
  let x = new A();
  // x.uprCase("abc") // no need for static method
  x.lwrCase("XYZ")
  // A.lwrCase('XYZ')