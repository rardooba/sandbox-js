// reverse fn

// const arr = [2, 45, 78, 1];
const arr = ["Rar", 45, true, 1];

const reverse = (arr) => {

  const reversedArray = []

  for (let index = arr.length - 1; index >= 0; index--) {
    reversedArray.push(arr[index])
  }

  return reversedArray
};

console.log(reverse(arr));
