// inferencia
// como a y b infieren que son number sin especificarlo
const a = 1;
const b = 2;

// c también será un number
const c = a + b;

let cadenaTexto = "hola";

cadenaTexto.toLowerCase();

// ❌ cadenaTexto = 2;
// ❌ cadenaTexto.propiedad inexistente;

// any
let obj: any = { x: 0 };

obj.foo();
obj();
obj.bar = 100;
obj = "hello";
const n: number = obj;

// functions
function saludar(name: string) {
  console.log(`Hola ${name}`);
}

saludar("Pepe");
// ❌ saludar(2) Argument number is not assignable to a string

function saludar2({
  firstName,
  age,
}: {
  firstName: string;
  age: number;
}): void {
  console.log(`Hola ${firstName}, tienes ${age} años`);
}

// ❌ saludar2({firstName: 2, age: 'Pepe'}) Type 'number' is not assignable to type 'string'
saludar2({ firstName: "Pepe", age: 2 });

function saludar3(persona: { firstName: string; age: number }): void {
  const { firstName, age } = persona;
  console.log(`Hola ${firstName}, tienes ${age} años`);
}

// ❌ saludar3({firstName: 2, age: 'Pepe'}) Type 'number' is not assignable to type 'string'
saludar3({ firstName: "Pepe", age: 2 });

function saludar4({ firstName, age }: { firstName: string; age: number }) {
  console.log(`Hola ${firstName}, tienes ${age} años`);
  return age;
}

let username: string;
// ❌ username = saludar4({ firstName: "Pepe", age: 30 }); Type 'string' is not assignable to type 'number'

const sayHiFromFunction = (fn: (name: string) => void) => fn("Miguel");

const sayHi = (name: string) => console.log(`Hola ${name}`);

sayHiFromFunction(sayHi);

// La primera función recibe una función como parámetro.
// La segunada función es la que se recibe como parámetro.
// sayHiFromFunction((name => console.log(`Hola ${name}`))('Miguel'))

// Tipar las arrow function
const sumar = (a: number, b: number) => a + b;

const restar: (a: number, b: number) => number = (a, b) => a - b;

function throwError(message: string): never {
  if (message) throw new Error(message);
  throw new Error(message);
}

function logMessage(message: string): void {
  console.log(message);
  // throw new Error(message)
  // El código nunca va a pasar de este punto
  // return implícito
}

// Inferencia funciones anónimas segun el contexto
const avengers = ["Spidey", "Hulk", "Avengers"];

// Infiere que avenger es un string porque avengers es un array de strings
avengers.forEach((avenger) => console.log(avenger.toLocaleUpperCase()));

// Objetos

let hero = {
  name: "thor",
  age: 1500,
};

function createHero(name: string, age: number) {
  return { name, age };
}

const ironman = createHero("iron-man", 43);

// Type Alias
/* 
type Hero = {
  name: string;
  age: number;
};

let spiderman: Hero = {
  name: "Spiderman",
  age: 18,
};

function createNewHero(hero: Hero): Hero {
  const { name, age } = hero;
  return { name, age };
}

const greenArrow = createNewHero({ name: "Green Arrow", age: 43 });
 */

// Optional properties

/* type HeroId = `${string}-${string}-${string}-${string}-${string}`;

type Hero = {
  id?: HeroId;
  name: string;
  age: number;
  isActive?: boolean;
};

let spiderman: Hero = {
  name: "Spiderman",
  age: 18,
};

function createNewHero(hero: Hero): Hero {
  const { name, age, isActive } = hero;
  return { id: crypto.randomUUID(), name, age, isActive };
}

const greenArrow = Object.freeze(
  createNewHero({
    name: "Green Arrow",
    age: 43,
    // It's an optional parameter
    // isActive: true,
  })
); */

// greenArrow.id = 3895798729878; Error read-only property

// TEMPLATE UNION TYPES

type HexadecimalColor = `#${string}`;

// const color: HexadecimalColor = '0033ff' // hexadecimal Error value it's different of type
const color2: HexadecimalColor = "#0033ff"; // hexadecimal

// Typescript no sirve para validar datos en tiempo de ejecución.

// UNION TYPES

/* type HeroId = `${string}-${string}-${string}-${string}-${string}`;

type HeroPowerScale =
  | "local"
  | "planetary"
  | "galactic"
  | "universal"
  | "multiversal";

let year: string | 1989;

year = "1998";
// year = 1892 Error union-type only admit string or 1989

type Hero = {
  id?: HeroId;
  name: string;
  age: number;
  isActive?: boolean;
  powerScale?: HeroPowerScale;
};

let spiderman: Hero = {
  name: "Spiderman",
  age: 18,
};

function createNewHero(hero: Hero): Hero {
  const { name, age, isActive, powerScale } = hero;
  return { id: crypto.randomUUID(), name, age, isActive, powerScale };
}

const greenArrow = Object.freeze(
  createNewHero({
    name: "Green Arrow",
    age: 43,
    // It's an optional parameter
    // isActive: true,
    // powerScale: 'omnypotent' Error: Not included in HeroPowerScale
    powerScale: "multiversal",
  })
); */

// INTERSECTION TYPES
type HeroId = `${string}-${string}-${string}-${string}-${string}`;
type HeroPowerScale =
  | "local"
  | "planetary"
  | "galactic"
  | "universal"
  | "multiversal";

type HeroBasicInfo = {
  // id?: number;
  name: string;
  age: number;
};

type HeroProperties = {
  readonly id?: HeroId;
  isActive?: boolean;
  powerScale?: HeroPowerScale;
};

type Hero = HeroBasicInfo & HeroProperties;

let spiderman: Hero = {
  name: "Spiderman",
  age: 18,
};

function createNewHero(input: HeroBasicInfo): Hero {
  const { name, age } = input;
  return { id: crypto.randomUUID(), name, age };
}

const greenArrow = Object.freeze(
  createNewHero({
    name: "Green Arrow",
    age: 43,
  })
);

// TYPE INDEXING

type HeroPropertiesTwo = {
  isActive: boolean;
  address: {
    planet: string;
    city: string;
  };
};

const addressHero: HeroPropertiesTwo["address"] = {
  planet: "Earth",
  city: "Madrid",
};

// Type from value
const address = {
  planet: "Earth",
  city: "Barcelona",
};
type Address = typeof address;

const addressTwitch: Address = {
  planet: "Mars",
  city: "Twitch",
};

// Type from function return
function createAddress() {
  return {
    planet: "Saturn",
    city: "Ring 3",
  };
}

// Utility to recover the return of the function and save in type AddressTwo
type AddressTwo = ReturnType<typeof createAddress>;

// ARRAYS

const languages: string[] = [];
// const languages: (string | number)[] = [];
// const languages: Array<string | number> = [];

languages.push("JavaScript");
languages.push("TypeScript");
languages.push("Golang");
languages.push("Rust");

// Tres en raya
/* const gameBoard: string[][] = [
  ["x", "o", "x"],
  ["o", "x", "o"],
  ["x", "", "o"],
]; */

type CellValue = "x" | "o" | "";

type GameBoard = [
  [CellValue, CellValue, CellValue],
  [CellValue, CellValue, CellValue],
  [CellValue, CellValue, CellValue]
];

const gameBoard: GameBoard = [
  ["x", "o", "x"],
  ["o", "x", "o"],
  ["x", "", "o"],
];

// Tuplas
// type State = [string, (newName: string) => void];
// const [heroTwo, setHeroTwo]: State = useState("Wonderwoman");

type RGB = [number, number, number];
const rgb: RGB = [255, 255, 0]; // 0 - 255
