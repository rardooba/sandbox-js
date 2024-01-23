// forEach(arr, callback)
const numbers = [1, 2, 3, 34, -5, 0]

// const filter = (arr, callback) => {

//   let newArr = []

//   for(let i = 0; i < arr.length; i++) {
//     if(callback(arr[i])) {
//       newArr.push(arr[i])  
//     } 

//   }

//   return newArr


// }


// console.log(filter(numbers, (item) => item > 2))

const users = [
  { id: 1, name: "John" },
  { id: 2, name: "Jane" },
  { id: 3, name: "Bob" },
];

const map = (arr, callback) => {
  const result = [] // newArr

  for (let i = 0; i < arr.length; i++) {
	const item = callback(arr[i], i, arr) 
    result.push(item)
  }

  return result
}

console.log(map(numbers, (item) => {
  return `<li>${item}</li>`
}))