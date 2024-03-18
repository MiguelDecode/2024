const triangle = (loop = 7) => {
  let tree = "";

  for (let i = 0; i <= loop; i++) {
    for (let j = 0; j < i; j++) {
      tree += "#";
    }
    tree += "\n";
  }

  return tree;
};

console.log(triangle());
