//Random number generator (1-61)
const min = 1;
const max = 61;

const rangeMaker = (min, max) => Math.floor(Math.random() * (max + 1 - min) + min);

const generatedNumber = rangeMaker(min, max);

console.log(`If you're smart enough to see this, you deserve the answer :D This is the target number: ${generatedNumber}`);

//Function for the guess input
let guess;
const inputGuess = () => guess = parseInt(document.getElementById("input-guess").value);

//Function to compare the guess with the generated numbers
const feedbackMsg = (msg) => document.getElementById("feedback-msg").innerHTML = msg;

let completionState;
const verifyGuess = () => {
    if (generatedNumber === guess) {
        feedbackMsg("You did it!");
        completionState = true;
        return true;
    } else if (guess < generatedNumber) {
        feedbackMsg("Go higher!");
        completionState = false;
        return false;
    } else if (guess > generatedNumber) {
        feedbackMsg("Go lower!");
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
        document.getElementById("lower-range").innerHTML = lower;
    } else if (guess > generatedNumber) {
        upper = guess;
        document.getElementById("upper-range").innerHTML = upper;
    }
}

//Function to determine if guess has already been attempted


//Function to validate input that number is within range
let guessArr = [];

const validateInputRange = () => {

    // if (completionState) {
    //   feedbackMsg("You're done mate :/ Reset the game");
    // } else if (guessArr.indexOf(guess) !== -1) {
    //   feedbackMsg("You've already tried this number :/")
    //   return false;
    // } else if (guess < lower || guess > upper) {
    //   feedbackMsg(`What're you doing? :/ Input a number between ${lower} and ${upper}!!`);
    //   return false;
    // } else {
    //   return true;
    // }

    switch (true) {
        case (guess < lower || guess > upper):
            feedbackMsg(`What're you doing? :/ Input a number between ${lower} and ${upper}!!`);
            return false;
            break;
        case (guessArr.indexOf(guess) === -1):
            guessArr.push(guess);
            return true;
            break;
        case (guessArr.indexOf(guess) !== -1):
            feedbackMsg("You've already tried this number :/")
            return false;
            break;
        case (completionState === true):
            feedbackMsg("You're done mate :/ Reset the game");
            return false;
            break;
        default:
            return true;
    }
}



//Guess counter
let counter = 0;


//Function for the button
function makeGuess() {
    inputGuess();
    //validateInputRange();
    if (validateInputRange()) {
        counter++;
        document.getElementById("guess-counter").innerHTML = `Number of guesses: ${counter}`;
        verifyGuess();
        if (!verifyGuess()) {
            currentRange();
        }
        if (verifyGuess()) {
            document.getElementById("reset").style.display = "inline"
        }
        rangeBarSize()
    }
}

function reload() {
    setTimeout(function() {
        window.location.reload();
    }, 1000)
}



//Event listener for pressing enter
const input = document.getElementById("input-guess");

input.addEventListener("keydown", function(event) {
    if (event.keyCode === 13) {
        event.preventDefault();
        document.getElementById("submit-guess").click();
        input.select();
    }
})

//Animation Stuffs
//Range bar
//Function to determine range bar size
let animBar;
function rangeBarSize() {
  let diff = upper - lower
  if (diff < 10) {
    animBar = `0.0${upper - lower}`;
  } else {
    animBar = `0.${upper - lower}`;
  }
}

// Animate on pressing Enter
input.addEventListener("keydown", function(event) {
    if (event.keyCode === 13) {
        document.getElementById("range-bar").animate([
          {transform: `scaleX(${animBar})`},
        ], {
          duration: 1000,
          fill: 'forwards',
          iterations: 1
        })
    }
})

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
