let personaje = {
  nombre: "Tony Stark",
  codeName: "Ironman",
  vivo: false,
  edad: 40,
  coords: {
    lat: 34.034,
    lng: -118.7,
  },
  trajes: ["Mark I", "Mark V", "Hulkbuster"],
  direccion: {
    zip: "10880, 90265",
    ubicacion: "Malibu, California",
  },
  'ultima-pelicula': "Infinity War",
};

console.log(personaje);
// Notación de punto
console.log("Nombre: ", personaje.nombre);
// Notación de corchetes
console.log("Nombre: ", personaje["nombre"]);
console.log("Edad: ", personaje.edad);
console.log(personaje.coords.lat);
console.log(personaje.trajes.length);

console.log(personaje.trajes[personaje.trajes.length - 1]);
const x = "vivo";

console.log("Vivo: ", personaje[x]);
console.log(personaje['ultima-pelicula'])

// Más detalles

delete personaje.edad 

console.log(personaje)

Object.freeze(personaje)

personaje.casado = true

const entries = Object.entries(personaje)
console.log(entries)

personaje.dinero = 9999999999;

console.log(personaje)

const propiedades = Object.getOwnPropertyNames(personaje)
console.log(propiedades)

const valores = Object.values(personaje)
console.log(valores)


