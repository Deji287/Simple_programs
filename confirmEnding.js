// code to confirm ending

const confirmEnding = (str, target) => {
  const newTerm = str.substr(-target.length);
  console.log(newTerm);
  if (newTerm === target) {
    return true;
  }
  return false;
};
console.log(confirmEnding("sugarcane", "cane"));
