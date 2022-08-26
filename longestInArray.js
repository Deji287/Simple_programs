//code to find the longest in an array of four arrays

const longestOfFour = (arr) => {
  let maxes = [];

  for (i = 0; i < arr.length; i++) {
    let tempMax = arr[i][0];
    for (j = 0; j < arr[i].length; j++) {
      currentNum = arr[i][j];

      if (currentNum >= tempMax) tempMax = currentNum;
    }
    maxes.push(tempMax);
  }
  return maxes;
};

// method 2

const longestOfFour1 = (arr) => {
  const maxes = [0, 0, 0, 0];

  for (i = 0; i < arr.length; i++) {
    for (j = 0; j < arr[i].length; j++) {
      let currentNum = arr[i][j];
      if (currentNum > maxes[i]) {
        maxes[i] = currentNum;
      }
    }
  }
  return maxes;
};

//method 2

//function to find maximum
const findMaxes = (arr) => {
  let temp = arr[0];

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > temp) temp = arr[i];
  }
  return temp;
};

//code to find maximum in four arrays

const longestOfFour2 = (arr) => {
  let maxes = [];
  for (let i = 0; i < arr.length; i++) {
    let realMax = findMaxes(arr[i]);

    maxes.push(realMax);
  }
  return maxes;
};
console.log(
  longestOfFour2([
    [4, 5, 74, 56],
    [43, 74, 89, 234],
    [100, 190, 78, 23],
    [1, 4, 7, 87],
  ])
);
