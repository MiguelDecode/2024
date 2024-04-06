const sumRange = (start, end, step = 1) => {
  let result = [];

  if (Math.sign(step) === -1) {
    console.log("Inside negative");
    for (let i = start; i >= end; i = i + step) {
      result.push(i);
    }
  } else if (Math.sign(step) === 0) {
    return "You must pass a valid step not zero";
  } else {
    for (let i = start; i <= end; i = i + step) {
      result.push(i);
    }
  }

  return result;
};

const sumNumbers = (numbers) => numbers.reduce((prev, curr) => prev + curr, 0);

const suma = sumRange(1, 10);
const suma2 = sumRange(1, 10, 2);
const suma3 = sumRange(5, 2, -1);

console.log(suma);
console.log(suma2);
console.log(suma3);

const total = sumNumbers(suma);

console.log(total);
