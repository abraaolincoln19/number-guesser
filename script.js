let humanScore = 0;
let computerScore = 0;
let currentRoundNumber = 1;

// Function to generate a random target number between 0 and 9
const generateTarget = () => {
  return Math.floor(Math.random() * 10);
};

// Function to compare user and computer guesses with the target number
const compareGuesses = (userGuess, computerGuess, targetNumber) => {
  // Calculate the absolute difference between each guess and the target number
  const userDifference = Math.abs(userGuess - targetNumber);
  const computerDifference = Math.abs(computerGuess - targetNumber);

  // If the user's difference is less than or equal to the computer's difference, the user wins
  if (userDifference <= computerDifference) {
    return true;
  } else {
    return false;
  }
};

// Function to update score based on winner
const updateScore = (winner) => {
  if (winner === 'human') {
    humanScore += 1;
  } else if (winner === 'computer') {
    computerScore += 1;
  }
};

// Function to advance the round
const advanceRound = () => {
  currentRoundNumber += 1;
};

// Test
/*console.log(`Initial Scores -> Human: ${humanScore}, Computer: ${computerScore}`);
console.log(`Current Round: ${currentRoundNumber}`);

const target = generateTarget();
console.log(`Target Number: ${target}`);

const userGuess = 5;
const computerGuess = 3;
const winner = compareGuesses(userGuess, computerGuess, target) ? 'human' : 'computer';
console.log(`Winner: ${winner}`);

updateScore(winner);
console.log(`Updated Scores -> Human: ${humanScore}, Computer: ${computerScore}`);

advanceRound();
console.log(`New Round Number: ${currentRoundNumber}`);*/
