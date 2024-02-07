// const user = {
//   pseudo: "Rar",
//   character: "A.K.I",
//   mail: "rar@dooba.xyz",
//   reputation: 23,
//   isAdmin: false
// }

const array = [2, 34, 2, 123, 75, 8]

const theHigherNumber = array.reduce((acc, cur) => cur + acc, 0)

console.log(theHigherNumber)