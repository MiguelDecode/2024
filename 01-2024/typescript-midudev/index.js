// inferencia
// como a y b infieren que son number sin especificarlo
var a = 1;
var b = 2;
// c también será un number
var c = a + b;
var cadenaTexto = "hola";
cadenaTexto.toLowerCase();
// ❌ cadenaTexto = 2;
// ❌ cadenaTexto.propiedad inexistente;
// any
var obj = { x: 0 };
obj.foo();
obj();
obj.bar = 100;
obj = "hello";
var n = obj;
// functions
function saludar(name) {
    console.log("Hola ".concat(name));
}
saludar("Pepe");
// ❌ saludar(2) Argument number is not assignable to a string
function saludar2(_a) {
    var firstName = _a.firstName, age = _a.age;
    console.log("Hola ".concat(firstName, ", tienes ").concat(age, " a\u00F1os"));
}
// ❌ saludar2({firstName: 2, age: 'Pepe'}) Type 'number' is not assignable to type 'string'
saludar2({ firstName: "Pepe", age: 2 });
function saludar3(persona) {
    var firstName = persona.firstName, age = persona.age;
    console.log("Hola ".concat(firstName, ", tienes ").concat(age, " a\u00F1os"));
}
// ❌ saludar3({firstName: 2, age: 'Pepe'}) Type 'number' is not assignable to type 'string'
saludar3({ firstName: "Pepe", age: 2 });
function saludar4(_a) {
    var firstName = _a.firstName, age = _a.age;
    console.log("Hola ".concat(firstName, ", tienes ").concat(age, " a\u00F1os"));
    return age;
}
var username;
// ❌ username = saludar4({ firstName: "Pepe", age: 30 }); Type 'string' is not assignable to type 'number'
var sayHiFromFunction = function (fn) { return fn("Miguel"); };
var sayHi = function (name) { return console.log("Hola ".concat(name)); };
sayHiFromFunction(sayHi);
// La primera función recibe una función como parámetro.
// La segunada función es la que se recibe como parámetro.
// sayHiFromFunction((name => console.log(`Hola ${name}`))('Miguel'))
// Tipar las arrow function
var sumar = function (a, b) { return a + b; };
var restar = function (a, b) { return a - b; };
function throwError(message) {
    if (message)
        throw new Error(message);
    throw new Error(message);
}
function logMessage(message) {
    console.log(message);
    // throw new Error(message)
    // El código nunca va a pasar de este punto
    // return implícito
}
// Inferencia funciones anónimas segun el contexto
var avengers = ["Spidey", "Hulk", "Avengers"];
// Infiere que avenger es un string porque avengers es un array de strings
avengers.forEach(function (avenger) { return console.log(avenger.toLocaleUpperCase()); });
// Objetos
var hero = {
    name: "thor",
    age: 1500,
};
function createHero(name, age) {
    return { name: name, age: age };
}
var ironman = createHero("iron-man", 43);
// const color: HexadecimalColor = '0033ff' // hexadecimal Error value it's different of type
var color2 = "#0033ff"; // hexadecimal
var spiderman = {
    name: "Spiderman",
    age: 18,
};
function createNewHero(input) {
    var name = input.name, age = input.age;
    return { id: crypto.randomUUID(), name: name, age: age };
}
var greenArrow = Object.freeze(createNewHero({
    name: "Green Arrow",
    age: 43,
}));
var addressHero = {
    planet: "Earth",
    city: "Madrid",
};
// Type from value
var address = {
    planet: "Earth",
    city: "Barcelona",
};
var addressTwitch = {
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
// ARRAYS
var languages = [];
// const languages: (string | number)[] = [];
// const languages: Array<string | number> = [];
languages.push("JavaScript");
languages.push("TypeScript");
languages.push("Golang");
languages.push("Rust");
var gameBoard = [
    ["x", "o", "x"],
    ["o", "x", "o"],
    ["x", "", "o"],
];
var rgb = [255, 255, 0]; // 0 - 255
