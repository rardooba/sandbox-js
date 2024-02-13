import { prompt } from "./helper.js";

console.log(`ADDITION-MASTER ™️`)

const firstNumber =  Number(await prompt("Enter the first number : "));
if (Number.isNaN(firstNumber)) {
  console.error("firstnumber n'est pas un nombre")
  process.exit(1)
}
const secondNumber =  Number(await prompt("Enter the second number : "));
if (Number.isNaN(secondNumber)) {
  console.error("secondNumber n'est pas un nombre")
  process.exit(1)
}

const add = (a, b) => a + b
const minus = (a, b) => a - b
const division = (a, b) => a === 0 || b === 0 ? process.exit(1) : a / b

console.log(`the result of addition is : ${add(firstNumber, secondNumber)}`)
console.log(`the result of soustration is : ${minus(firstNumber, secondNumber)}`)
console.log(`the result of division is : ${division(firstNumber, secondNumber)}`)


