// code to calculate sum of members of an array

const sumOfMembers = (arr) => {
  let sum = 0;
  for (i = 0; i <= arr.length; i++) {
    sum += i;
  }
  return sum;
};
console.log(sumOfMembers([1, 2, 3, 4, 5]));
