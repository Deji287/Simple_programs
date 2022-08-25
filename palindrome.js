// code to check if for palindrome

const palindrome = (str) => {
  const reg = /[\W_]/g;

  const newStr = str.toLowerCase().replace(reg, "");

  const reverse = newStr.split("").reverse().join("");
  if (reverse === newStr) return true;

  return false;
};
console.log(palindrome("9racecar9$"));
