// code to check for mutation

const mutation = (arr) => {
  let firstWord = arr[0];
  let secondWord = arr[1];

  for (letter of secondWord) {
    if (firstWord.indexOf(letter) === -1) return false;

    return true;
  }
};
// method 2 (include method)

const mutation1 = (arr) => {
  firstWord = arr[0];
  secondWord = arr[1];

  for (letter of secondWord) {
    if (!firstWord.includes(letter)) return false;

    return true;
  }
};

console.log(mutation1(["hello", "he"]));
