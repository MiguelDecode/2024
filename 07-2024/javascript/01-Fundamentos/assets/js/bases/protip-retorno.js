const crearPersona = (name, surname) => ({
  name,
  surname,
});

const persona = crearPersona("Miguel", "Decode");

console.log(persona);

function imprimeArgumentos() {
  console.log(arguments);
}

imprimeArgumentos(10, true, false, "Miguel", "Hola");

const imprimeArgumentos2 = (edad, ...args) => {
  return args;
};

const [texto, uso, largo, casado] = imprimeArgumentos2(12, "arguments", "Nuevo", 4, false);

console.log({texto, uso, largo, casado});

const {surname : apellido} = crearPersona('Mario', 'Bros')

console.log(apellido)


let tony = {
  nombre: "Tony Stark",
  codeName: "Ironman",
  vivo: false,
  edad: 40,
  trajes: ["Mark I", "Mark V", "Hulkbuster"],
};

const imprimePropiedades = ({nombre, codeName, vivo, edad, trajes, dir = 'unknow'}) => {
    console.log(nombre)
    console.log(codeName)
    console.log(dir)
    console.log(vivo)
    console.log(edad)
    console.log(trajes)
}

imprimePropiedades(tony)
