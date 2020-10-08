//Random number generator (1-61)
const min = 1;
const max = 61;

const rangeMaker = (min, max) => Math.floor(Math.random() * (max + 1 - min) + min);

const generatedNumber = rangeMaker(min, max);

console.log(`This is the generated number: ${generatedNumber}`);

//Function for the guess input
let guess;

const inputGuess = () => {
  guess = document.getElementById("inputGuess").value;
  console.log(`This is the guessed number: ${guess}`);
}

//Function to compare the guess with the generated numbers
const verifyGuess = () => {
  if (generatedNumber == guess) {
    console.log(`The number is correct!!`);
  } else {
    console.log(`The number is wronggg :(`);
  };
}

//Function to validate input that number is within range
const validateInputRange = () => {
  if (document.getElementById("inputGuess").value < 1 || document.getElementById("inputGuess").value > 61) {
    document.getElementById("errorMsg").style.display = "block";
    return false;
  } else {
    document.getElementById("errorMsg").style.display = "none";
    return true;
  }
}

//Function for the button
function makeTheGuess() {
  validateInputRange();
  if (validateInputRange()) {
    inputGuess();
    verifyGuess();
  }

}
