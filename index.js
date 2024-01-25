const splice = (array, start, deleteCount, ...itemsToAdd) => {
  const removedItems = [];

  // Copier les éléments à supprimer
  for (let i = start; i < start + deleteCount; i++) {
    removedItems.push(array[i]);
  }

  // Si des éléments doivent être ajoutés
  if (itemsToAdd.length > 0) {
    const newArray = new Array(array.length + itemsToAdd.length - deleteCount);

    
    // Copier les éléments avant la zone à remplacer
    for (let i = 0; i < start; i++) {
      newArray[i] = array[i];
    }
    
    // Ajouter les nouveaux éléments
    for (let i = 0; i < itemsToAdd.length; i++) {
      newArray[start + i] = itemsToAdd[i];
    }

    // Copier les éléments après la zone à remplacer
    for (let i = start + deleteCount; i < array.length; i++) {
      newArray[i + itemsToAdd.length - deleteCount] = array[i];
    }

    array.length = newArray.length;

    // Copier les éléments du nouveau tableau vers l'ancien tableau
    for (let i = 0; i < newArray.length; i++) {
      array[i] = newArray[i];
    }
  } else {
    // Si aucun élément n'est ajouté, copier les éléments après la zone à supprimer
    for (let i = start; i < array.length - deleteCount; i++) {
      array[i] = array[i + deleteCount];
    }

    array.length = array.length - deleteCount;
  }

  return removedItems;
}

// Exemple d'utilisation
const arr = [1, 2, 3, 4, 5];

const removed = splice(arr, 1, 2, 'a', 'b', 'c');

console.log(arr); // Output: [1, 'a', 'b', 'c', 4, 5]
console.log(removed); // Output: [2, 3]
