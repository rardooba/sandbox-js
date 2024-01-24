// findIndex fn

const arr = ["Rar", 1, true, 23, "🦄"]

const findIndex = (arr, item) => {

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === item) return i
  }

  return -1
} 

console.log(findIndex(arr, "🦄")) // 4
console.log(findIndex(arr, "🚀")) // -1
