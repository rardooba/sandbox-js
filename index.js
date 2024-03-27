// la closure va nous permettre de stocker un password qui ne sera jamais accessible avec lock.password

const createLock = (password) => {
  const checkPassword = (attempt) => attempt === password;
  return checkPassword;
};

const lock = createLock("securePassword");
const lock2 = createLock(" ");

console.log(lock("securePassword"));
console.log(lock("wrongPassword"));
console.log(lock2(" "));
