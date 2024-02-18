import { prompt } from "./helper.js";

const LIMIT_NUMBER =  100000000000000

console.log(`
ADDITION-MASTER ™️

Choose an operator:
1. Addition
2. Soustraction
3. Multiplication
4. Division
`)

let operator =  Number(await prompt("Enter operator number : "));

while (operator !== 1 && operator !== 2 && operator !== 3 && operator !== 4 && operator !== 5) {
  console.error("operator is not a number or choose operator")
  operator =  Number(await prompt("Enter operator number : "))
}

const validateNumber = (number, limitNumber) => {
  if (Number.isNaN(number) || Math.abs(number) > limitNumber) {
    console.error(`Error : ${number} is not a number or is too big / too small (max: ${limitNumber})`)
    process.exit(1)
  }  
}  

//! Error here
const promptNumber = async (message) => Number(await prompt(`${message} : `));

const firstNumber =  validateNumber(promptNumber("Enter the first number"), LIMIT_NUMBER);
const secondNumber =  validateNumber(promptNumber("Enter the second number"), LIMIT_NUMBER);

const add = (a, b) => a + b
const minus = (a, b) => a - b
const multiply = (a, b) => a * b
const division = (a, b) => a === 0 || b === 0 ? process.exit(1) : a / b

switch (operator) {
  case 1:
    console.log(`the result of addition is : ${add(firstNumber, secondNumber)}`)
    break;
  case 2:
    console.log(`the result of soustration is : ${minus(firstNumber, secondNumber)}`)
  break
  case 3:
  console.log(`the result of multiplication is : ${multiply(firstNumber, secondNumber)}`)
  break
  case 4:
    console.log(`the result of division is : ${division(firstNumber, secondNumber)}`)
    break
  default:
    break;
}



