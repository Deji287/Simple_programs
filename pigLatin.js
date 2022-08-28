//code for pig latin function (regex)

const translatePigLatin = (str) => {
  const firstVowel = str.match(/[aeiou]/);
  const firstVowelPosition = str.indexOf(firstVowel);

  if (firstVowelPosition > 0) {
    return (
      str.slice(firstVowelPosition) + str.slice(0, firstVowelPosition) + "ay"
    );
  }
  return str + "ay";
};
// second method (own function)

//function to determine position of first vowel
const findFirstVowelPosition = (str) => {
  let vowel = "aeiou";
  for (i = 0; i < str.length; i++) {
    if (vowel.includes(str[i])) {
      return i;
    }
  }
};
console.log(findFirstVowelPosition("cat"));
const translatePigLatin1 = (str) => {
  const firstVowelPosition = findFirstVowelPosition(str);

  if (firstVowelPosition > 0) {
    return (
      str.slice(firstVowelPosition) + str.slice(0, firstVowelPosition) + "ay"
    );
  }
  return str + "ay";
};
console.log(translatePigLatin1("aconsonant"));
