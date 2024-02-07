// Crear interfaces

// Cree una interfaz para validar el auto (el valor enviado por parametro)
interface Auto {
  encender: boolean;
  velocidadMaxima: number;
  acelerar(): void;
}

const conducirBatimovil = (auto: Auto): void => {
  auto.encender = true;
  auto.velocidadMaxima = 100;
  auto.acelerar();
};

const batimovil: Auto = {
  encender: false,
  velocidadMaxima: 0,
  acelerar() {
    console.log("...... gogogo!!!");
  },
};

// Cree una interfaz con que permita utilizar el siguiente objeto
// utilizando propiedades opcionales
interface Villian {
  reir?: boolean;
  comer?: boolean;
  llorar?: boolean;
}

const guason: Villian = {
  reir: true,
  comer: true,
  llorar: false,
};

const reir = (guason: Villian): void => {
  if (guason.reir) {
    console.log("JAJAJAJA");
  }
};

// Cree una interfaz para la siguiente funcion
interface City {
  (ciudadanos: string[]): number;
}

type Ciudad = (ciudadanos: string[]) => number

const ciudadGotica: City = (ciudadanos) => {
  return ciudadanos.length;
};

// Cree una interfaz que obligue crear una clase
// con las siguientes propiedades y metodos
interface Humano {
  edad: number;
  estadoCivil: string;
  nombre: string;
  sexo: string;
  imprimirBio(): void;
}

/*
  propiedades:
    - nombre
    - edad
    - sexo
    - estadoCivil
    - imprimirBio(): void // en consola una breve descripcion.
*/

class Persona implements Humano {
  constructor(
    public nombre: string,
    public edad: number,
    public sexo: string,
    public estadoCivil: string
  ) {}

  imprimirBio(): void {
    console.log(`${this.nombre} tiene ${this.edad}`);
  }
}
