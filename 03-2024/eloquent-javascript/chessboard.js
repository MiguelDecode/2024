const drawChessboard = (num = 8) => {
  if (num % 2 !== 0)
    throw new Error("The number of board sides must be a even number");

  let board = "";

  for (let i = 0; i < num; i++) {
    for (let j = 0; j < num / 2; j++) {
      if (i % 2 === 0) {
        board += " #";
      } else {
        board += "# ";
      }
    }

    board += "\n";
  }

  return board;
};

// console.log(drawChessboard());

const drawChessboardCustom = (row = 8, col = 8) => {
  let board = "";

  for (let i = 0; i < row; i++) {
    for (let j = 0; j < col; j++) {
      if (i % 2 === 0) {
        board += j % 2 === 0 ? " " : "#";
      } else {
        board += j % 2 === 0 ? "#" : " ";
      }
    }

    board += "\n";
  }

  return board;
};

// console.log(drawChessboardCustom(3, 3));
