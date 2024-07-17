const heroes = ["Batman", "Superman", "Mujer Maravilla", "Aquaman"];

console.warn("Ciclo tradicional");
for (let index = 0; index < heroes.length; index++) {
  console.log(heroes[index]);
}

console.warn('For in')

for (const index in heroes) {
    console.log(heroes[index])
}

console.warn('For of')

for (const heroe of heroes) {
   console.log(heroe) 
}

