// code that truncate a string

const truncateString = (str, num) => {
  if (num <= 3) return str.slice(0, num) + "...";

  if (num >= str.length) return str;
  return str.slice(0, num - 3) + "...";
};
console.log(truncateString("the shorte", 12));
