// code to convert roman numerial to arabic numerial
const numToRoman = (str) => {
  if (str === null) return -1;

  let num = charToInt(str.charAt(0));
  let prev = 0;
  let curr = 0;

  for (let i = 1; i < str.length; i++) {
    curr = charToInt(str.charAt(i));
    prev = charToInt(str.charAt(i - 1));

    if (curr <= prev) {
      num += curr;
    } else {
      num = num - prev * 2 + curr;
    }
  }
  return num;
};
const charToInt = (c) => {
  switch (c) {
    case "I":
      return 1;
    case "V":
      return 5;
    case "X":
      return 10;
    case "L":
      return 50;
    case "C":
      return 100;
    case "D":
      return 500;
    case "M":
      return 1000;
    default:
      return -1;
  }
};
console.log(numToRoman("MMVI"));
