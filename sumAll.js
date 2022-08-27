// code to sum all numbers in an array

const sumAll = (arr) => {
  const start = Math.min(arr[0], arr[1]);
  const end = Math.max(arr[0], arr[1]);
  let total = 0;

  for (i = start; i <= end; i++) {
    total += i;
  }
  return total;
};
console.log(sumAll([5, 1]));
