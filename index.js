const array = [12, 34, 234, 1n, 2, 1234, 0];

const filter = (arr, callback) => {

  const newArr = []

  for (let i = 0; i < arr.length; i++) {
    if (callback(arr[i])) newArr.push(arr[i])
  }

  return newArr
}


console.log(filter(array, (item) => item > 10))

