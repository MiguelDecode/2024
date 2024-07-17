const elMayor = (a, b) => (a > b ? a : b);

const tieneMembresia = (miembro) => (miembro ? "2 dólares" : "10 dólares");

console.log(elMayor(10, 15));

console.log(tieneMembresia(false));

const amigo = false;
const amigosArr = [
  "Peter",
  "Tony",
  "Dr. Strange",
  amigo ? "Thor" : "Loki",
  (() => "Nick Fury")(),
  elMayor(10, 15),
];

console.log(amigosArr);

const nota = 85;

const grado =
  nota >= 96
    ? "A+"
    : nota >= 90
    ? "A"
    : nota >= 85
    ? "B+"
    : nota >= 80
    ? "B"
    : nota >= 75
    ? "C+"
    : nota >= 70
    ? "C"
    : "F";

console.log({nota, grado});
