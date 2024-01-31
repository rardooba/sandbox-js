const addTo = (a) => {
  
  const add = (b) => a + b
  
  return add
}
const addTo5 = addTo(5)
console.log(addTo5(2))