let arr = [1, 2, 3]

let arr1 = [...arr]

arr[0] = 3
arr1[0] = "Rar"



console.log(arr.unshift("Rar"), arr1.push(34), arr, arr1)