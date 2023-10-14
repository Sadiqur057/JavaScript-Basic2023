// Write a javascript program to generate a random number and store it in a variable. The program then takes an input from the user to tell them whether the guess is correct, greater or lower than the original number
let winningNum = Math.floor(Math.random()*100);
let guessingNum;
console.log(winningNum);
while(guessingNum!=winningNum){
    guessingNum = prompt("Guess a number: ");
    if(guessingNum!=winningNum){
        if(guessingNum>winningNum && guessingNum<100){
            alert("The guess was greater than winning number");
        }else if(guessingNum<winningNum&& winningNum>0){
            alert("The guess was less than winning number");
        }else if(guessingNum>100 && guessingNum<0){
            alert("The number should be between 1-100");
        }
    }
}
alert("You have guessed the correct number");

