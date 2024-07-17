let juegos = ["Zelda", "Mario", "Metroid", "Chrono Trigger"];

console.log("Length: ", juegos.length);

let primero = juegos[0]

let ultimo = juegos[juegos.length - 1]

console.log({primero, ultimo})

juegos.forEach(el => console.log('Juego: ',el))

const newLength = juegos.push('F-Zero')

console.log(newLength)
console.table(juegos)

const nuevaLonguitud = juegos.unshift('Fire Emblem')
console.log(nuevaLonguitud)
console.table(juegos)

const removeLast = juegos.pop()
console.log(removeLast)
console.table(juegos)

const removeFirst = juegos.shift();
console.log(removeFirst)
console.table(juegos)

let pos = 1
const removePos = juegos.splice(pos,1)
console.log(removePos)
console.table(juegos)

let metroidIndex = juegos.indexOf('Metroid')
console.log(metroidIndex)