class Category{
    dryFruit(){
        return "Almond is dry fruit"
    }
    pomeFruit(){
        return "Apple is pome fruit"
    }
}
class Fruits extends Category{
    name = "Orange"
    constructor(){
        super()
        console.log("this is an constructor",this.name);
    }
    getFruits(){
        console.log("getFruits");
    }

}
let f1 = new Fruits();
f1.getFruits();
console.log(f1.pomeFruit());

// super keyword => to call parent class constructor we use super constructor

// parents unable to call function of child
let c1 = new Category();
// c1.getFruits();