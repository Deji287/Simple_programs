//code to replace a word in a sentence

const myReplace = (str, before, after) => {
  if (before[0] === before[0].toUpperCase()) {
    after = after[0].toUpperCase() + after.slice(1);
  }
  return str.replace(before, after);
};

const myReplace1 = (str, before, after) => {
  const words = str.split(" ");

  if (before[0] === before[0].toUpperCase) {
    after = after[0].toUpperCase + after.slice(1);
  }
  for (i = 0; i < words.length; i++) {
    if (words[i] === before) {
      words[i] = after;
    }
  }
  return words.join(" ");
};
console.log(
  myReplace1("The quick fox Jumped over the lazy dog", "Jumped", "leaped")
);
