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


