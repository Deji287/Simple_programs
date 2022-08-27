// code to convert to roman numeral

const numToRoman = (num) => {
  const romanToNum = {
    M: 1000,
    CM: 900,
    D: 500,
    CD: 400,
    C: 100,
    XC: 90,
    L: 50,
    XL: 40,
    X: 10,
    XI: 9,
    V: 5,
    VI: 4,
    I: 1,
  };

  let roman = "";
  for (let key in romanToNum) {
    while (num >= romanToNum[key]) {
      roman += key;
      num -= romanToNum[key];
    }
  }
  return roman;
};
console.log(numToRoman(2064));
