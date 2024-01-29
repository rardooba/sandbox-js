const str = "Hello Rar 🚨 How are U ?"

const find = (str, callback) => {
  
  const strToArray = [...str]
  for (let i = 0; i < strToArray.length; i++) {
    console.log(strToArray[i])
    if (callback(strToArray[i])) return true
  }

  return false
}

console.log(find(str, item => item === "🚨"))