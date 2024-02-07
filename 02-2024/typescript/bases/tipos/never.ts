(() => {
  const error = (message: string): never => {
    throw new Error(message);

    // This code never execute
    console.log("Not Found");
  };

  error("Auxilio");
})();
