const array = ["😓", "👽", "😜"]

const includes = (arr, callback) => {

  for (let i = 0; i < arr.length; i++) {
    if (callback(arr[i])) return true
  }
  return false
}

console.log(includes(array, (item) => item === "👽"))


