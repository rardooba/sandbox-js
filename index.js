// forEach(arr, callback)
const numbers = [1, 2, 3]

const map = (arr, callback) => {

  let newArr = []

  for(let i = 0; i < arr.length; i++) {
    newArr.push(callback(arr[i]))
  }

  return newArr

}


console.log(map(numbers, (item) => item * 2))
