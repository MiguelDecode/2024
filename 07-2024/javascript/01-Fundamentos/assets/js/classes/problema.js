
const fher = {
    nombre: 'Fernando',
    edad: 30,
    imprimir(){
        console.log(`Nombre: ${this.nombre}`)
    }
}

const pedro = {
    nombre: 'Pedro',
    edad: 15
}

// fher.imprimir()

function Persona(nombre, edad){
    console.log('Se ejecuta esta línea')

    this.nombre = nombre;
    this.edad = edad;

    this.imprimir = function(){
        console.log(`Nombre: ${this.nombre}, edad ${this.edad}`)
    };
}

const maria = new Persona("María", 18);
const melissa = new Persona('Melissa', 35)
console.log(maria);

maria.imprimir();
melissa.imprimir();

