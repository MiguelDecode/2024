function sum(a, b) {
  if (typeof a !== "number" || typeof b !== "number") {
    throw new Error(`${a} or ${b} aren't numbers`);
  } else {
    return a + b;
  }
}


module.exports = sum;
