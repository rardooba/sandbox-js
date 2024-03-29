const caluculateNumbers = (firstNumber) => function multiply(secondNumber) {
  return firstNumber * secondNumber
}

const result = caluculateNumbers(2)

console.log(result(3))
