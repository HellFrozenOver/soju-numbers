//Random number generator (1-61)
const min = 1;
const max = 61;

const rangeMaker = (min, max) => Math.floor(Math.random() * (max + 1 - min) + min);

const generatedNumber = rangeMaker(min, max);

console.log(`If you're smart enough to see this, you deserve the answer :D This is the target number: ${generatedNumber}`);

//Function for the guess input
let guess;
const inputGuess = () => guess = document.getElementById("inputGuess").value;

//Function to compare the guess with the generated numbers
let completionState;

const verifyGuess = () => {
  if (generatedNumber == guess) {
    document.getElementById("feedbackMsg").innerHTML = "You did it!";
    completionState = true;
    return true;
  } else {
    document.getElementById("feedbackMsg").innerHTML = "The number is wrong :( Try again!";
    completionState = false;
    return false;
  };
}

//Function for determining current range
let lower = min;
let upper = max;

const currentRange = () => {
  if (guess < generatedNumber) {
    lower = guess;
    document.getElementById("lowerRange").innerHTML = lower;
  } else if (guess > generatedNumber) {
    upper = guess;
    document.getElementById("upperRange").innerHTML = upper;
  }
}

//Function to validate input that number is within range
const validateInputRange = () => {
  if (completionState) {
    document.getElementById("feedbackMsg").innerHTML = `You're done mate :/ Reset the game`;
  } else if (document.getElementById("inputGuess").value < lower || document.getElementById("inputGuess").value > upper) {
    document.getElementById("feedbackMsg").innerHTML = `What're you doing? :/ Input a number between ${lower} and ${upper}!!`;
    return false;
  } else {
    return true;
  }
}

//Guess counter
let counter = 0;

//Function for the button
function makeGuess() {
  validateInputRange();
  if (validateInputRange()) {
    counter++;
    document.getElementById("guessCounter").innerHTML = `Number of guesses: ${counter}`;
    inputGuess();
    verifyGuess();

    if (!verifyGuess()) {
      currentRange();
    }

    if (verifyGuess()) {
      document.getElementById("reset").style.display = "inline"
    }

  }
}

function reload() {
  setTimeout(function() {
    window.location.reload();
  }, 1000)
}

//Event listener for pressing enter
const input = document.getElementById("inputGuess");

input.addEventListener("keydown", function(event) {
  if (event.keyCode === 13) {
    event.preventDefault();
    document.getElementById("submitGuess").click();
  }
})

//Animation Stuffs
//Input Text Floating
const inputs = document.querySelectorAll('.form-control input');
const labels = document.querySelectorAll('.form-control label');

labels.forEach(label => {
  label.innerHTML = label.innerText
    .split('')
    .map((letter, idx) => `<span style="
				transition-delay: ${idx * 50}ms
			">${letter}</span>`)
    .join('');
});

//Fancy Button
let animateButton = function(e) {

  e.preventDefault;
  //reset animation
  e.target.classList.remove('animate');

  e.target.classList.add('animate');
  setTimeout(function() {
    e.target.classList.remove('animate');
  }, 700);
};

let bubblyButtons = document.getElementsByClassName("bubbly-button");

for (let i = 0; i < bubblyButtons.length; i++) {
  bubblyButtons[i].addEventListener('click', animateButton, false);
}
