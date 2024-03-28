const countBs = (word) => word.split("").filter((el) => el === "B").length;

// console.log(countBs("Barbacoa"));

// console.log(countBs("Barbaque"));

const countChar = (word, letter) =>
  word.split("").filter((el) => el === letter).length;

console.log(countChar("Calculadora", "a"));
console.log(countChar("Calculadora", "c"));
console.log(countChar("Calculadora", "C"));
