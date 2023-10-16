// qus 1 => Write a program using prompt function to take input of age as a value from the user and use alert to tell him if he can drive based on age, age>= 18 can drive

let age = prompt("Enter your age: ");
age = parseInt(age);
if (age < 18) {
  alert("Sorry you cannot drive");
} else {
  alert("You can drive");
}

// qus 2 => In qus1 use Confirm to ask the user if he wants to see the prompt again

let c = confirm("Do you want to re-submit?");
if (c) {
  age = prompt("Enter your age: ");
  age = parseInt(age);
  if (age < 18) {
    alert("Sorry you cannot drive");
  } else {
    alert("You can drive");
  }
}

// qus 3 => In the previous qus use console.error to log the error if the age entered is negative

if(age<0){
    console.error("Negative value");
}

// qus 4 => Write a program to change the url to google.com(redirection) of user enters a number greater than 4
let num = prompt("Enter a num: ")
num = parseInt(num);
if(num>4){
    location.href="https://google.com/"
}

// qus 5 => Change the background of the page to yellow, red, green based on user input through prompt
let color = prompt("Chose background color: Enter a number(1-3) 1 = yellow , 2 = red, 3 = green ");
color = parseInt(color);
if(color==1){
    document.body.style.background="yellow";
}else if(color==1){
    document.body.style.background="yellow";
}else if(color==1){
    document.body.style.background="yellow";
}else{
    alert("Please enter a number between 1-3 next time");
}

