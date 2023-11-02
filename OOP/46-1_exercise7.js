// Create a js program that capable of generating a password which contains atleast one lowercase, one uppercase and one special characters. Create a password class to achieve the same

class PasswordGenerator{
    constructor(){
        console.log("welcome to password generator");
        this.pass = "";
    }
    generatePassword(len,difficulties){
        let alphabets = "abcdefghijklmnopqrstuvwxyz";
        let numbers = "1234567890";
        let specialChar = "!@@#$%^&*";

        if(len<3){
            console.log("Password should be atleast 3 character long");
        }else if(len==null){
            console.log("Please choose a value");
        }
        else if(difficulties==1){
            let i =0;
            while(i<len){
                this.pass+=alphabets[Math.floor(Math.random()*len)];
                this.pass+=numbers[Math.floor(Math.random()*len)];
                i+=2;
            }
            this.pass = this.pass.substring(0,len)
            return this.pass;
        }
        else if(difficulties==2){
            let i =0;
            while(i<len){
                this.pass+=alphabets[Math.floor(Math.random()*len)];
                this.pass+=numbers[Math.floor(Math.random()*len)];
                this.pass+=specialChar[Math.floor(Math.random()*len)];
                i+=3;
            }
            this.pass = this.pass.substring(0,len)
            return this.pass;
        }else if(difficulties==3){
            let i =0;
            while(i<len){
                this.pass+=alphabets[Math.floor(Math.random()*len)];
                this.pass+=alphabets[Math.floor(Math.random()*len)].toUpperCase();
                this.pass+=numbers[Math.floor(Math.random()*len)];
                this.pass+=specialChar[Math.floor(Math.random()*len)];
                i+=3;
            }
            this.pass = this.pass.substring(0,len)
            return this.pass;
        }
    }
}
let p1 = new PasswordGenerator();
console.log(p1.generatePassword(7,3));