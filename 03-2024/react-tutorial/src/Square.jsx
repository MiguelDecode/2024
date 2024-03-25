import React from "react";

export const Square = ({ value, index, handleClick }) => {
  return (
    <button onClick={() => handleClick(index)} className="square">
      {value}
    </button>
  );
};
