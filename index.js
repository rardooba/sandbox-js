// find fn

const arr = ["Rar", 1, true, 23, "🦄"]

const find = (arr, callback) => {

  for (let i = 0; i < arr.length; i++) {
    if (callback(arr[i], i, arr)) return arr[i]
  }

  return undefined
} 

console.log(find(arr, item => item === "🐶"))
