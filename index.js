// slice fn

const arr = [2, 45, 78, 1];
// const arr = ["Rar", 45, true, 1];

const slice = (arr, start, end) => {
  start = start || 0;
  end = end || arr.length;

  start = start < 0 ? Math.max(arr.length + start, 0) : start;
  end = end < 0 ? Math.max(arr.length + end, 0) : end;

  const slicedArray = [];

  for (let index = start; index < end; index++) {
    slicedArray.push(arr[index]);
  }

  return slicedArray;
};

console.log(slice(arr, 0, 2));
console.log(slice(arr, -13, 2));
