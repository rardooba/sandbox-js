import { prompt } from "./helper.js";

const LIMIT_NUMBER = 100000000000000;

console.log(`
ADDITION-MASTER ™️

Choose an operator:
1. Addition
2. Soustraction
3. Multiplication
4. Division
`);

let operator

const promptOperator = async(operator) => {
  operator = Number(await prompt("Enter operator number : "))

  if (operator !== 1 && operator !== 2 && operator !== 3 && operator !== 4) {
    return promptOperator(operator);
  }

  return operator
}

operator = await promptOperator(operator)

const validateNumber = (number, limitNumber) => {
  if (Number.isNaN(number) || Math.abs(number) > limitNumber) {
    console.error(
      `Error : ${number} is not a number or is too big / too small (max: ${limitNumber})`
    );
    process.exit(1);
  }

  return number;
};

const promptNumber = async (message) => Number(await prompt(`${message} : `));

const firstNumber = validateNumber(
  await promptNumber("Enter the first number"),
  LIMIT_NUMBER
);
const secondNumber = validateNumber(
  await promptNumber("Enter the second number"),
  LIMIT_NUMBER
);

const calculateResult = (operator, firstNumber, secondNumber) => {
  if (operator === 1) return firstNumber + secondNumber;
  if (operator === 2) return firstNumber - secondNumber;
  if (operator === 3) return firstNumber * secondNumber;
  if (operator === 4)
    return firstNumber === 0 || secondNumber === 0
      ? process.exit(1)
      : firstNumber / secondNumber;
  return 0;
};

console.log(calculateResult(operator, firstNumber, secondNumber));
