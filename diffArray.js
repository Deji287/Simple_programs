// code that return differnce in two arrays

const diffArray = (arr1, arr2) => {
  const uniqOnes = [];

  for (i = 0; i < arr1.length; i++) {
    if (!arr2.includes(arr1[i])) {
      uniqOnes.push(arr1[i]);
    }
  }
  for (j = 0; j < arr2.length; j++) {
    if (arr1.indexOf(arr2[j]) === -1) {
      uniqOnes.push(arr2[j]);
    }
  }
  return uniqOnes;
};

//method 2 (filter)

const diffArray1 = (arr1, arr2) => {
  const combo = arr1.concat(arr2);
  console.log(combo);

  return combo.filter((elem) => {
    if (!arr1.includes(elem) || !arr2.includes(elem)) return elem;
  });
};
console.log(diffArray([2, 5, 1, 14], [2, 6, 1, 10]));
