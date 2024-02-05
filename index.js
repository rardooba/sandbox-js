const array = ["😓", "👽", "😜"]

const someFn = (arr, callback) => {

  for (let i = 0; i < arr.length; i++) {
    if (callback(arr[i])) return true
  }

  return false

}


console.log(someFn(array, (item) => item === "👽" ))
console.log(someFn(array, (item) => item === "Rar" ))
console.log(array.some((item) => item === "👽" ));
console.log(array.some((item) => item === "Rar" ));