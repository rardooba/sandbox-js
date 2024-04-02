import {prompt} from "./prompt.js"

function getRandomInt(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}

const targetNumber = getRandomInt(0, 100)

const guestNumber = (targetNumber, numberOfGuest) => {


  console.log(targetNumber)
  const userNumber = Number(prompt("Enter the number between 0 to 100: "))
  

  if (userNumber !== targetNumber || Number.isNaN(userNumber) || userNumber > 100) {
    
    
    if(userNumber > targetNumber) {    
      console.log("📈 The entered number is **too big**") 
      return guestNumber(targetNumber, ++numberOfGuest)
    } 
    if(userNumber < targetNumber) {
      console.log("📉 The entered number is **too small**")
      return guestNumber(targetNumber, ++numberOfGuest)
    } 

    return guestNumber(targetNumber, ++numberOfGuest)
  }


  if (userNumber === targetNumber) { 
    console.log(`🟢 Congratulation ! The number is ${targetNumber} with ✨ ${numberOfGuest} ${numberOfGuest <= 1 ? "attempt" : "attempts"} !`) 
  }
}


console.log(`
Welcome to the Number Guessing Game! 🎮

Rules:
1. The system will generate a random number between 0 and 100.
2. Your task is to guess this number.
3. Enter a number when prompted.
4. If your guess is too high or too low, you'll be notified, and you can guess again.
5. The game continues until you guess the correct number.

Let's get started! 🚀
`)

const retryGame = (targetNumber) => {
  guestNumber(targetNumber, 0)
  const retry = prompt("Do you want to retry ? (Y/N): ")
  targetNumber = getRandomInt(0, 100)
  if(retry === "Y" || retry === "y") return retryGame(targetNumber)
  if(retry === "N" || retry === "n") console.log("Thank you for playing! Goodbye.")
}

retryGame(targetNumber)
