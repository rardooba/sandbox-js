const split = (str = "") => {
  
  const newArr = []
  let i = 0

  //if (!str) return []

  while (str[i] !== undefined) {
    newArr.push(str[i])
    i++
  }

  return newArr
}

console.log(split())