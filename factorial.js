//code to find factorial of a number

const factorialise = (num) => {
  let result = 1;

  for (i = 1; i <= num; i++) {
    result *= i;
  }
  return result;
};
console.log(factorialise(5));
