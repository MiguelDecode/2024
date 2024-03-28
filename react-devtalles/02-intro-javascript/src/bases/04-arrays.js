// Arreglos en Javascript

// No se recomienda usar este método para crear un array literal
// const arreglo = new Array();

const arreglo = [1, 2, 3, 4];
// arreglo.push(1);
// arreglo.push(2);
// arreglo.push(3);
// arreglo.push(4);

// Copia por referencia
// let arreglo2 = arreglo;

// Crea una nueva referencia
let arreglo2 = [...arreglo, 5];

const arreglo3 = arreglo2.map((el) => el * 2);

console.log(arreglo);
console.log(arreglo2);
console.log(arreglo3);

