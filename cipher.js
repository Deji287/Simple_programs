// code to cipher a set of characters by 13 places

const rotate13 = (str) => {
  numChar = "";
  // iterate the string
  for (i = 0; i < str.length; i++) {
    // convert the character to their ascii value
    const charNum = str[i].charCodeAt();

    if ((charNum >= 65 && charNum <= 77) || (charNum >= 97 && charNum <= 109)) {
      // convert back to string
      numChar += String.fromCharCode(charNum + 13);
    } else if (
      (charNum >= 78 && charNum <= 90) ||
      (charNum >= 110 && charNum <= 122)
    ) {
      numChar += String.fromCharCode(charNum - 13);

      //to return spaces
    } else {
      numChar += str[i];
    }
  }
  return numChar;
};
console.log(rotate13("ADEa NQRn"));
