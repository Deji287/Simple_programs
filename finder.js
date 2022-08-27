// wherefore art thou function

const whatIsInAName = (collection, source) => {
  const keys = Object.keys(source);

  return collection.filter((elem) => {
    for (let key of keys) {
      if (!elem.hasOwnProperty(key) || elem[key] !== source[key]) {
        return false;
      }
    }
    return true;
  });
};
console.log(
  whatIsInAName(
    [
      { first: "Morgan", last: "Smith" },
      { first: "Mercury", last: null },
      { first: "Tybolt", last: "capulet" },
    ],
    { last: "capulet" }
  )
);

// console.log(
//   whatIsInAName([{ a: 1, b: 2 }, { b: 1 }, { a: 1, b: 2, c: 2 }], {
//     a: 1,
//     b: 2,
//   })
// );
