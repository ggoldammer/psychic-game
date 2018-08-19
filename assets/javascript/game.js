let win = 0;
let winH3 = document.getElementById("wins");

let losses = 0;
let lossesH3 = document.getElementById("losses");

let guessesLeft = 10;
let guessLeftH3 = document.getElementById("guessesLeft");

let computerChoices = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
let computerSelection = computerChoices[Math.floor(Math.random() * computerChoices.length)];
console.log(computerSelection);

let userGuess = "";
let userGuessH3 = document.getElementById("yourGuesses");

let guesses = userGuess;
let guessesH3 = guesses;

document.onkeyup = function (event) {
    if (guessesLeft >= guesses) {

        userGuess = event.key;
        winH3.innerHTML = win;
        guessLeftH3.innerHTML = guessesLeft;
        userGuessH3.innerHTML = userGuess;

        if (userGuess === "a" || "b" || "c" || "d" || "e" || "f" || "g" || "h" || "i" || "j" || "k" || "l" || "m" || "n" || "o" || "p" || "q" || "r" || "s" || "t" || "u" || "v" || "w" || "x" || "y" || "z") {
            if (userGuess === computerSelection) {
                alert("You guessed correctly! The letter was " + computerSelection + ". You win a point!");
                win++;
                winH3.innerHTML = win;
                computerSelection = computerChoices[Math.floor(Math.random() * computerChoices.length)];
            } else if (userGuess !== computerSelection) {
                guessesLeft--;
                losses++;
                lossesH3.innerHTML = losses;
            }
        }

    }

    if (losses > 10) {
        alert("You've lost! Start all over!");
        win = 0;
        losses = 0;
        guessesLeft = 10;
        computerChoices = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
    }
};
