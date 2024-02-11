// Crea una función que reciba dos números y devuelva el mayor de ellos

const biggerNumber = (num1, num2, ...num3) => {
  if (isNaN(num1) || isNaN(num2))
    return "First or second parameter are not numbers.";

  for (let i = 0; i < num3.length; i++) {
    if (isNaN(num3[i])) return `${num3[i]} isn't a number.`;
  }

  return Math.max(num1, num2, ...num3);
};

console.log(biggerNumber(10, 38));
console.log(biggerNumber(3, 9, 8, 89, 28, 35, 895));
console.log(biggerNumber("Hello", 9, 8, 89, 28, 35, 895));
console.log(biggerNumber(3, 9, 8, 89, "hello", 35, 895));
console.log(biggerNumber(3, 9, 8));
