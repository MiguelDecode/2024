const personajes = ["Goku", "Vegeta", "Trunks"];

const [, vegeta] = personajes;

console.log(vegeta);

const retornaArreglo = () => {
  return ["ABC", 123];
};

const [letras, numeros] = retornaArreglo();

console.log(letras, numeros);

// Tarea

const useState = (valor) => {
  return [
    valor,
    () => {
      console.log("Hola Mundo");
    },
  ];
};

// const arr = useState("Goku");
// console.log(arr);

const [nombre, setNombre] = useState("Goku");

console.log(nombre);
setNombre();
