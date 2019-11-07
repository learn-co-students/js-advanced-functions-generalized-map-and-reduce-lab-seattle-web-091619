// Add your functions here
const map = (arr, fn) => {
  const newArr = [];
  for (const item of arr) {
    newArr.push(fn(item));
  }
  return newArr;
}

function reduce(array, applyFunction, startPoint){
  let i = 0;
  let accumulatingVariable = 0;
  if (startPoint !== undefined){
      i = 0;
      accumulatingVariable = startPoint;
  } else {
      accumulatingVariable = array[0];
      i = 1;
  }
  for(; i<array.length; i++){
      accumulatingVariable = applyFunction(accumulatingVariable, array[i])
  }
  return accumulatingVariable;
}  