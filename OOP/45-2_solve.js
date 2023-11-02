// qus1 = > Create a javascript class to create a complex number. Create a constructor to set the real and complex part
class Complex{
    constructor(real, imaginary){
        this.real = real;
        this.imaginary = imaginary;
    }
    // qus2 => Write a method to add the complex numbers in the above class

    add(num){
        this.real += num.real;
        this.imaginary += num.imaginary;
        
    }
}

let a = new Complex(2,4)
let b = new Complex(6,2)
a.add(b);
console.log(`sum of imaginary: ${a.imaginary} and real: ${a.real}`);
                                                                                            

// qus3 => Create a class Student from a class Human. Override a method and see changes

class Human{
    constructor(name, age){
        this.name = name;
        this.age = age;
    }
    intro(){
        console.log(`My name is ${this.name} and I am ${this.age} years old`)
    }
}
class Student extends Human{
    intro(){
        super.intro()
        console.log("\Currently I am studying")
        
    }
}
let stud1 = new Student("Atik",23)
stud1.intro();

// qus4=> See if student is an instance of Human using instanceof keyword

console.log(stud1 instanceof Human); // true as it has been extended from parent class


// qus 5 -> Use getter and setter and get the real and imaginary parts of the complex number

class Complex2{
    constructor(real, imaginary){
        this.real = real;
        this.imaginary = imaginary;
    }
    // qus2 => Write a method to add the complex numbers in the above class

    add(num){
        this.real += num.real;
        this.imaginary += num.imaginary;
    }
    get real(){
        return this._real;
    }
    get imaginary(){
        return this._imaginary;
    }

    set real(real){
        this._real = real;
    }
    set imaginary(imaginary){
        this._imaginary= imaginary;
    }
}

let a1 = new Complex2(2,4)
let b1 = new Complex2(6,2)
a1.add(b1);
console.log(`sum of imaginary: ${a1.imaginary} and real: ${a1.real}`);