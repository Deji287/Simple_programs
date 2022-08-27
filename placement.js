// to check where a num belong in an array

const getIndexToIns = (arr, num) => {
  arr.sort((a, b) => {
    return a - b;
  });
  for (i = 0; i < arr.length; i++) {
    if (num <= arr[i]) return i;
  }
  return arr.length;
};
console.log(getIndexToIns([10, 30, , 56, 46, 89], 799));
