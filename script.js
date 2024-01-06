// Generate a random number between 1 and 100
const targetNumber = Math.floor(Math.random() * 10) + 1;

// Function to check the user's guess
function checkGuess() {
  const guessInput = document.getElementById('guessInput');
  const message = document.getElementById('message');
  const userGuess = parseInt(guessInput.value);

  //Condition
  if (isNaN(userGuess) || userGuess < 1 || userGuess > 100) {
    message.textContent = 'Please enter a valid number between 1 and 10.';
  } else {
    if (userGuess === targetNumber) {
      message.textContent = `Congratulations! You guessed the correct number (${targetNumber}).`;
      message.style.color = 'green';
      guessInput.disabled = true;
    } else {
      const difference = Math.abs(targetNumber - userGuess);
      let hint = '';

      if (difference <= 10) {
        hint = 'You are very close!';
      } else if (difference <= 20) {
        hint = 'You are getting warmer.';
      } else {
        hint = 'You are cold.';
      }

      message.textContent = `${hint} Try again.`;
      message.style.color = 'red';
    }
  }
}
