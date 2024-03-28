const calculateMin = (a, b) => {
  if (typeof a !== "number" || typeof b !== "number")
    return "Try to introduce two numbers";

  if (a === b) return "Both are equal.";

  if (a < b) return `${a} is the smaller.`;

  if (b < a) return `${b} is the smaller.`;
};

console.log(calculateMin(5, 3));
console.log(calculateMin(3, 3));
console.log(calculateMin(1, 15));
