// Add your functions here
const map = (arr, fn) => {
  const newArr = [];
  for (const item of arr) {
    newArr.push(fn(item));
  }
  return newArr;
}

function reduce(arr, fn, start){
  let i = 0;
  let accumulator = 0;
  if (start !== undefined){
      i = 0;
      accumulator = start;
  } else {
      accumulator = arr[0];
      i = 1;
  }
  for(; i<arr.length; i++){
      accumulator = fn(accumulator, arr[i])
  }
  return accumulator;
}  