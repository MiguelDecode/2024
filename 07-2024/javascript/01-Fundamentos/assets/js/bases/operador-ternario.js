// Días de semana abrimos a las 11,
// pero los fines de semana abrimos a las 9

//  Entra en un sitio web, para consultar si está abierto hoy...

const dia = 3;

const horaActual = 10;

let horaApertura;
let mensaje;

// if (dia === 0 || dia === 6) {
//   // Fin de semana
//   horaApertura = 9;
// } else {
//   // Entre semana
//   horaApertura = 11;
// }

horaApertura = dia === 0 || dia === 6 ? 9 : 11;

// if (horaActual >= horaApertura) {
//   mensaje = "Está abierto";
// } else {
//   mensaje = "Está cerrado, hoy abrimos a las " + horaApertura;
// }

mensaje =
  horaActual >= horaApertura
    ? "Está abierto"
    : `Está cerrado, hoy abrimos a las ${horaApertura}`;

console.log({ horaApertura, mensaje });
