// reduce(arr, callback, initialValue)
// callback(acc, curr, i)

const numbers = [1, 2, 3]

const reduce = (arr, callback, initialValue) => {

  let accumulator = initialValue ?? arr[0]

  const isInitialValue = initialValue !== undefined

for(let i = isInitialValue ? 0 : 1; i < arr.length; i++) {
    const current = arr[i]
    accumulator = callback(accumulator, current)
  }

  return accumulator
}

console.log(reduce(numbers, (acc, curr) => acc + curr, []))