// code to eliminate falsy values

const bouncer = (arr) => {
  newArray = [];
  for (elem of arr)
    if (elem) {
      newArray.push(elem);
    }
  return newArray;
};

//second method (filter)

const bouncer1 = (arr) => {
  return arr.filter((elem) => {
    return elem;
  });
};

console.log(bouncer1(["r", false, null, 9, "null", "ate", NaN]));
