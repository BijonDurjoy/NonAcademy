const guessField = document.getElementById("guess");
function generateRandomNumber() {
  return Math.floor(Math.random() * 100);
}

let randomNumber = generateRandomNumber();
function submitGuess() {
  const userGuess = Number(guessField.value);
  const resultMessage = document.getElementById("resultMessage");

  console.log(userGuess);
  console.log(randomNumber);
  if (userGuess === randomNumber) {
    resultMessage.innerText =
      "Congratulations! You guessed the correct number!";
  } else if (userGuess < randomNumber) {
    resultMessage.innerText = `Too low, The correct number was ${randomNumber}. Try again.`;
  } else {
    resultMessage.innerText = `Too high, The correct number was ${randomNumber}. Try again.`;
  }

  randomNumber = generateRandomNumber();
  guessField.value = "";
}
