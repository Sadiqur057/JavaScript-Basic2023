// Use JavaScript to create a game of snake water and gun. The game should ask you to enter S, W or G. The computer should be able to randomly generate S, W or G and declare win or loss using alert. Use confirm and prompt whenever required.

const options = ["S", "G", "W"];
const randIndex = Math.floor(Math.random()*options.length)
const compInput = options[randIndex];

let userInput = prompt("Enter S or W or G:");

const game = (compInput,userInput) =>{
    if(compInput==userInput){
        alert("Draw match");
    }else if(compInput == "S" && userInput =="G"){
        alert("User win");
    }else if(compInput == "W" && userInput =="s"){
        alert("User win");
    }else if(compInput == "W" && userInput =="G"){
        alert("User win");
    }else if(compInput == "G" && userInput =="S"){
        alert("Computer win");
    }else if(compInput == "S" && userInput =="W"){
        alert("Computer win");
    }else if(compInput == "G" && userInput =="W"){
        alert("Computer win");
    }else{
        alert("Wrong input!");
    }
}

game(compInput,userInput);