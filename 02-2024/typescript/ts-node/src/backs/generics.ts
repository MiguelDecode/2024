import {
  genericFunction,
  genericFunctionArrow,
  printObject,
} from "../genercis/genercis";

import { Hero, Villian } from "../interfaces";

// import { Hero } from "./interfaces/hero";
// import { Villian } from "./interfaces/villian";

/* printObject(123);
printObject(new Date());
printObject({ a: 1, b: 2, c: 3 });
printObject([1, 2, 3, 4, 5]);
printObject("Hola Mundo"); */

// const name: string = "Miguel";

// console.log(genericFunctionArrow(3.141689).toFixed(2));
// console.log(genericFunctionArrow(name).toUpperCase());
// console.log(genericFunctionArrow(new Date()).getDate());

const deadpool = {
  name: "Deadpool",
  realName: "Wade Winston Wilson",
  dangerLevel: 130,
};

console.log(genericFunctionArrow<Villian>(deadpool).dangerLevel);
