// sort fn

const arr = [2, 45, 78, 1]

function sort(array) {

  for (let i = 0; i < array.length - 1; i++) {
    for (let j = 0; j < array.length - 1 - i; j++) {
      if (array[j] > array[j + 1]) {
        // Échange les éléments si ils sont dans le mauvais ordre
        const temp = array[j];
        array[j] = array[j + 1];
        array[j + 1] = temp;
      }
    }
  }

  return array;
}


console.log(sort(arr))

