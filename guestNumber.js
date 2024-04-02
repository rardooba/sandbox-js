import { prompt } from "./prompt.js";

const getRandomNumber = (min, max) => {
  return Math.floor(Math.random() * (max - min + 1) + min);
};

const isValidNumber = (number) => {
  return !Number.isNaN(number) && number >= 0 && number <= 100;
};

const game = () => {
  const targetNumber = getRandomNumber(0, 100);
  let attemptCount = 0;

  const guestNumber = () => {
    console.log(targetNumber);
    const userNumber = Number(prompt("Enter the number between 0 to 100: "));
    attemptCount++;

    if (!isValidNumber(userNumber)) {
      console.log(
        "🛑 The entered number is invalid. It must be between 0 and 100.\n\n"
      );
      return guestNumber();
    }

    if (userNumber > targetNumber) {
      console.log("📈 The entered number is **too big**");
      guestNumber();
      return;
    }
    if (userNumber < targetNumber) {
      console.log("📉 The entered number is **too small**");
      guestNumber();
      return;
    }

    console.log(
      `🟢 Well done! The random number was indeed ${targetNumber} ✨ You succeeded in ✨ ${attemptCount} ${
        attemptCount <= 1 ? "attempt" : "attempts"
      } !`
    );
  };

  const restartGame = () => {
    const retry = prompt("Do you want to play again? (Y/N): ");

    if (retry.toUpperCase() === "Y" || retry === "y") return game();
    else if (retry.toUpperCase() === "N" || retry === "n")
      console.log("Thank you for playing! Goodbye.");
    else {
      console.log("Invalid choice. Please enter Y or N.");
      restartGame();
    }
  };

  guestNumber()
  restartGame()  
};

console.log(`
Welcome to the Number Guessing Game! 🎮

Rules:
1. The system will generate a random number between 0 and 100.
2. Your task is to guess this number.
3. Enter a number when prompted.
4. If your guess is too high or too low, you'll be notified, and you can guess again.
5. The game continues until you guess the correct number.

Let's get started! 🚀
`);

game();
