// some()

const fruits = ["🍏", "🍏", "🍏"]

const some = (arr, callback) => {



  for(let i = 0; i < arr.length; i++) {

    if(callback(arr[i], i, arr)) return true
  }

  return false
}

//
const every = (arr, callback) => {



  for(let i = 0; i < arr.length; i++) {

    if(!callback(arr[i], i, arr)) return false
  }

  return true
}

console.log(every(fruits, (item) => item === "🍏"))