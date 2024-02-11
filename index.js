const numbers = [2.3, -0.34, 0.2, -3, 9, 199, 0.2]

const closestToZero = (numbers) => {
  let closest = numbers[0]
  numbers.length === 0 && 0

  for (const number of numbers) {
    const numberAbs = Math.abs(number)
    const closestAbs = Math.abs(closest)

    if (numberAbs < closestAbs) {
      closest = number
    } else if (numberAbs === closestAbs) {
      closest = number
    }
  }

  return closest
}

console.log(closestToZero(numbers))