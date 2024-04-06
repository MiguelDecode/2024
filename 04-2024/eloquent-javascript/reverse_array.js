const reverseArray = (arr) => arr.reverse();

const reverseArrayInPlace = (arr) => {
  let result = [];

  for (let i = arr.length - 1; i >= 0; i--) {
    result.push(arr[i]);
  }

  return result;
};

const letters = ["A", "B", "C", "D", "E"];
const numbers = [1, 2, 3, 4, 5];

const second = reverseArrayInPlace(letters);

const third = reverseArrayInPlace(numbers);

console.log(second);

console.log(third);
