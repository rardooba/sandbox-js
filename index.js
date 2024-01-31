const double = (n) => 2 * n
const substract = (n) => n - 1

const calc = (func, number) => func(number)

console.log(calc(double, 5))
console.log(calc(substract, 5))