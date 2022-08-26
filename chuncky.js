// code to chunk array into groups

const chunkArrayInGroups = (arr, size) => {
  let groups = [];

  while (arr.length > 0) {
    groups.push(arr.slice(0, size));
    arr = arr.slice(size);
  }
  return groups;
};

// method 2 (splice)

const chunkArrayInGroups1 = (arr, size) => {
  groups = [];
  while (arr.length > 0) {
    newgroup = arr.splice(0, size);
    groups.push(newgroup);
  }
  return groups;
};
console.log(chunkArrayInGroups1([1, 2, 3, 4], 3));
