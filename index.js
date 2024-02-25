const user = {
  firstname : "Nanda",
  lastname: "Dooba"
}

const entries = (object) => {
  const [...key] = Object.keys(object)
  const [...value] = Object.values(object)

  return [key, value]

}

console.log(entries(user))

