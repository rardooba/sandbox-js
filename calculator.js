import { prompt } from "./helper.js";

console.log(`
ADDITION-MASTER ™️

Choose an operator:
1. Addition
2. Soustraction
3. Multiplication
4. Division
`)

const operator =  Number(await prompt("Enter operator number : "));
if (operator !== 1 || operator !== 2 || operator !== 3 || operator !== 4 || operator !== 5) {
  console.error("operator is not a number or choose operator")
  process.exit(1)
}

const firstNumber =  Number(await prompt("Enter the first number : "));
if (Number.isNaN(firstNumber)) {
  console.error("firstnumber is not a number")
  process.exit(1)
}
const secondNumber =  Number(await prompt("Enter the second number : "));
if (Number.isNaN(secondNumber)) {
  console.error("secondNumber is not a number")
  process.exit(1)
}

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
  console.log(`the result of soustration is : ${multiply(firstNumber, secondNumber)}`)
  break
  case 4:
    console.log(`the result of division is : ${division(firstNumber, secondNumber)}`)
    break
  default:
    break;
}



