// Use JavaScript to create a game of snake water and gun. The game should ask you to enter S, W or G. The computer should be able to randomly generate S, W or G and declare win or loss using alert. Use confirm and prompt whenever required.

const options = ["Snake", "Gun", "Water"];

const randomIndex = Math.floor(Math.random() * options.length);
const randomOption = options[randomIndex];
console.log("Randomly chosen option:", randomOption);

let userInput = prompt("Choose between 1-3 where 1:Snake,2:Gun,3:Water")

