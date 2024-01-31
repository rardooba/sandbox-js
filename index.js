const isAuthorized = ({age}) => age > 18;

const user = {
  username: "Rar",
  age: 19
}

console.log(isAuthorized(user))