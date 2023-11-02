let regex = "";
let text = "This is a test based on regular expression"
console.log(text.replace("regular expression" ,"REGEX"))


const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
const isValidEmail = emailRegex.test('example@email.com');

const dateRegex = /\d{2}\/\d{2}\/\d{4}/g;
const dates = 'Dates: 10/25/2023, 12/15/2024'.match(dateRegex);

const html = '<p>Hello</p> <div>World</div>';
const cleanedHtml = html.replace(/<[^>]*>/g, ''); // Removes HTML tags

//test(): Tests if a string matches a pattern, returns true or false.
regex = /apple/;
text = "I like apples.";
isMatch = regex.test(text);
console.log(isMatch); // Output: true


// exec(): Searches for a match in a string and returns an array with details of the match.
regex = /apple/;
text = "I like apples. Apples are delicious.";
const match = regex.exec(text);
console.log(match[0]); // Output: "apple"


// match(): Returns an array containing all matched patterns.
regex = /\d+/g;
text = "42 is the answer, 1234 is a number.";
const matches = text.match(regex);
console.log(matches); // Output: ["42", "1234"]

// search(): Returns the index of the first match in the string.
regex = /world/;
text = "Hello, world! Welcome to the world.";
const index = text.search(regex);
console.log(index); // Output: 7

// replace(): Replaces matched patterns in a string with a replacement.
regex = /apples/g;
text = "I have apples, apples are great.";
const replacedText = text.replace(regex, "bananas");
console.log(replacedText); // Output: "I have bananas, bananas are great."

// split(): Splits a string into an array based on a specified pattern.
// Examples
regex = /[, ]+/;
text = "apple, banana, cherry orange";
const fruits = text.split(regex);
console.log(fruits); // Output: ["apple", "banana", "cherry", "orange"]
