const split = (str) => [...str]
const splitArrayFrom = (str) => Array.from(str)
const splitAssign = (str) => Object.assign([], str)


console.log(split("RaR"))
console.log(splitArrayFrom("RaR"))
console.log(splitAssign("RaR"))