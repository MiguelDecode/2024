const persona = {
  nombre: "Miguel",
  apellido: "Decode",
  edad: 45,
  direccion: {
    ciudad: "New York",
    zip: 897389,
    lat: 88.2987,
    lng: 98.09289,
  },
};

// console.table(persona);
console.log(persona);

// Se copia por referencia
// const persona2 = persona;

// Se realiza una copia superficial
const persona2 = { ...persona };

persona2.nombre = "Peter";
persona2.direccion.ciudad = "Los Angeles";

console.log("Persona:", persona);
console.log("Persona2:", persona2);
