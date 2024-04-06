const arrayToList = (arr) => {
  let list = {};
  for (let i = arr.length - 1; i >= 0; i--) {
    list = { value: arr[i], rest: i === arr.length - 1 ? null : list };
  }
  return list;
};

let arr = [10, 20];

console.log(arrayToList(arr));

const listToArray = (list) => {
  let arr = [];

  while (list !== null) {
    arr.push(list.value);
    list = list.rest;
  }

  return arr;
};

console.log(listToArray(arrayToList([10, 20, 30])));

const prepend = (value, rest) => {
  return { value: value, rest: rest };
};

console.log(prepend(10, prepend(20, null)));

// 