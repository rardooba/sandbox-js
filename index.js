// forEach(arr, callback)
const numbers = [1, 2, 3, 34, -5, 0]

const filter = (arr, callback) => {

  let newArr = []

  for(let i = 0; i < arr.length; i++) {
    if(callback(arr[i])) {
      newArr.push(arr[i])  
    } 

  }

  return newArr


}


console.log(filter(numbers, (item) => item % 2 === 0))
