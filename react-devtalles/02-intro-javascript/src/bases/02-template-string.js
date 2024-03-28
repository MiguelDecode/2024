const nombre = "Miguel";
const apellido = "Decode";

// const nombreCompleto = nombre + " " + apellido
const nombreCompleto = `${nombre} ${apellido}`;

console.log(nombreCompleto);

function getSaludo(nombre) {
  return "Hola Mundo " + nombre;
}

console.log(`Este es un texto: ${getSaludo(nombreCompleto)}`);


