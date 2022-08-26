//code that repeat a str specified numbers of times

// method 1
const repeatStringNumTimes = (str, num) => {
  if (num < 0) {
    return "";
  }
  return str.repeat(num);
};

// method 2

const repeatStringNumTimes2 = (str, num) => {
  let display = "";
  if (num < 0) return "";

  for (i = 0; i < num; i++) {
    display += str;
  }
  return display;
};

// method 3 (recursion method)

const repeatStringNumTimes3 = (str, num) => {
  if (num < 0) return "";

  if (num === 1) return str; //base case

  //return a function that calls itself
  return (str += repeatStringNumTimes3(str, num - 1));
};
console.log(repeatStringNumTimes2("hello" + " ", 5));
