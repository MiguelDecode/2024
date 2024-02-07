(() => {
  interface AddTwoNumbers {
    (a: number, b: number): number;
  }

  let addNumbersFunction: AddTwoNumbers = (a: number,b: number) => {
    return a + b;
  };
})();
