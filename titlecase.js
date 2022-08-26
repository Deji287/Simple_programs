//code to capitalize first letter of a sentence

const titleCase = (str) => {
  let words = str.toLowerCase().split(" ");
  for (let i = 0; i < words.length; i++) {
    words[i] = words[i][0].toUpperCase() + words[i].slice(1);
  }
  return words.join(" ");
};

const titleCase1 = (str) => {
  let words = str
    .toLowerCase()
    .split(" ")
    .map((word) => {
      return word[0].toUpperCase() + word.slice(1);
    });
  return words.join(" ");
};
console.log(titleCase1("I am now a big boy"));
