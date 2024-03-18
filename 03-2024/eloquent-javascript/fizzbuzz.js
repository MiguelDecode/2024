const fizzbuzz = (num) => {
  const multipliers = { 3: "fizz", 5: "buzz" };

  let string = "";

  Object.entries(multipliers).forEach(([key, value]) => {
    if (num % key === 0) string += value;
  });

  return string ? string : num;
};

const fizzbuzzNumbers = (limit = 10) => {
  for (let i = 1; i < limit; i++) {
    console.log(fizzbuzz(i));
  }
};

fizzbuzzNumbers(100);
