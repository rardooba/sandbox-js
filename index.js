const numbers = [5, 1.3, 23, -0.5, 3.7, 345, 10, -6,7]

const closestToZero = (arr) => {

  let closest = arr[0]

  for (const number of arr) {
    const absNumber = Math.abs(number)
    const absClosest = Math.abs(closest)
    if (absNumber < absClosest) {
      closest = number
    } else if (absNumber === absClosest) {
      closest = number
    }
  }

  return closest
}

console.log(closestToZero(numbers))