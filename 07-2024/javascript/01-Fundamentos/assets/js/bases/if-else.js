let a = 8;

if (a >= 10) {
  console.log("A es mayor o igual que 10.");
} else {
  console.log("A es menor que 10.");
}

console.log("Fin de programa.");

const hoy = new Date();

let dia = hoy.getDay();

console.log({ dia });

if (dia === 0) {
  console.log("Domingo");
} else if (dia === 1) {
  console.log("Lunes");
} else {
  console.log("No es lunes ni domingo");
}

dia = 9

const weekDay = {
  0: "Domingo",
  1: "Lunes",
  2: "Martes",
  3: "Miércoles",
  4: "Jueves",
  5: "Viernes",
  6: "Sábado",
};

console.log(`Hoy es ${weekDay[dia] || 'desconocido'}`);

