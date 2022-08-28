// code to remove items from an array

function destroyer(arr) {
  const args = Array.from(arguments);
  args.splice(0, 1);
  const result = [];

  for (num of arr) {
    if (args.indexOf(num) === -1) {
      result.push(num);
    }
  }

  return result;
}

//second method (filter)

function destroyer1(arr) {
  const args = Array.from(arguments);
  args.splice(0, 1);

  return arr.filter((num) => {
    return !args.includes(num);
  });
}

console.log(destroyer1([1, 3, 5, 1, 4, 3, 3, 2], 2, 3));
