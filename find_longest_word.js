//code to find the longest word in a sentence

const findTheLongestWord = (str) => {
  const words = str.split(" ");
  let presentLongestWord = "";
  words.forEach((word) => {
    if (word.length > presentLongestWord.length) presentLongestWord = word;
  });
  return presentLongestWord;
};
console.log(
  findTheLongestWord("The longest word in this sentence is assignment")
);
