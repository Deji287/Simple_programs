// code to reverse a string

//Method 1

const reverseStr = (str) => {
  const strArr = str.split("");
  const reverseStrArr = strArr.reverse();
  const strReverse = reverseStrArr.join("");

  return strReverse;
};
console.log(reverseStr("Deji"));
