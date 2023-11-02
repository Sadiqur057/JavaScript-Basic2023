// const msg = require("./module-1");
// msg.hello("Sadiq");
// msg.greet();

// common js modules => using destructuring 
// const {hello,greet} = require("./module-1"); // commonjs
// hello("akash");
// greet();

// ES6 Modules
import welcome,{hello,greet} from "./module-2.js";
hello("akash");
greet();
welcome();