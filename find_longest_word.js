//code to find the longest word in a sentence

const findTheLongestWord = (str) => {
  const words = str.split(" ");
  words.forEach((word) => {
    console.log(word);
  });
};
console.log(
  findTheLongestWord("The longest word in this sentence is assignment")
);
