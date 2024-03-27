import { prompt } from "./helper.js";

console.log("ADDITION-MASTER ™️");

console.log(`Choose an operator :
1. Addition
2. Soustraction
3. Multiplication
4. Division`);

const LIMIT_NUMBER = 100000000000000;

const validateNumber = (number) => {
  if (Number.isNaN(number) || Math.abs(number) > LIMIT_NUMBER) {
    console.error(
      "Error : secondNumber is not a number or is too big / too small (max: 100000000000000)"
    );
    process.exit(1);
  }
};

const promptNumber = (message) => {
  const number = Number(prompt(message));
  validateNumber(number);
  return number;
};

const calculateResult = (operator, firstNumber, secondNumber) => {
  if (operator === 1) return firstNumber + secondNumber;
  if (operator === 2) return firstNumber - secondNumber;
  if (operator === 3) return firstNumber * secondNumber;
  if (operator === 4 && secondNumber === 0)
    throw new Error("Error : division by 0");
  if (operator === 4) return firstNumber / secondNumber;
};

const promptOperator = () => {
  let operator = promptNumber("Enter the operator : ");

  if (operator !== 1 && operator !== 2 && operator !== 3 && operator !== 4) {
    console.error("Operator must be 1, 2, 3 or 4 !");
    return promptOperator();
  }

  return operator;
};

const operator = promptOperator();

const firstNumber = promptNumber("Enter the first number : ");

const secondNumber = promptNumber("Enter the second number : ");

console.log(calculateResult(operator, firstNumber, secondNumber));
