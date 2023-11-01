// A closure is a function along with it lexical environments
// A closure is the combination of a function bundled together (enclosed) with refenerences to its surrounding state (the lexical environment). In other workds, a closure gives you access to an Outer functions scope from an inner function

let msg = "Good day";

function hello(){
    let msg = "Good morning";
    {
        let  msg = "Good afternoon"
        console.log("Hello " + msg);
    }
    let c = function hello2(){
        console.log("I am C " +msg);
    }
    // return of function c, and as well as references of lexical environment. th
    return c;
}

d= hello()
d()


function init() {
    var name ="Mozilla";
    function displayName(){
        console.log(name);
    }
    name = "sadiq";
    return displayName;
}
let c = init();
c()


function myFunc(){
    const x = () =>{
        let a = 1;
        console.log("x:"+a);
    
        const y = () =>{
           // let a = 2;
            console.log("y:"+a);
    
            const z= () =>{
               // let a = 3;
                console.log("z:"+a);
            }
            z();
        }
        a=999;
        y();
    }
    return x;
}

let f = myFunc()
f()