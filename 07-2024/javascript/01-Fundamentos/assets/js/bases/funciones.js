function saludar (name = 'Anónimo') {
    console.log(`Hola ${name}`)
    return [1, 2, 3, 5]

    console.log('Mensaje inalcanzable')
}

const saludar2 = function(name){
    console.log(arguments)
    console.log(`Hola ${name}`)
}

const saludar3 = () => {
    console.log('Hola Saludo3')
}

const saludo4 = () => console.log('Hola saludo4')

// saludar('Miguel');
console.log(saludar('Miguel'))

saludar2('Juan', 40, true, 'Costa Rica')

saludar3();

saludo4()

function sumar(a,b) {
    return a + b
}

console.log(sumar(3, 7))

const sumar2 = (a,b) => a + b

console.log(sumar2(8, 13))

function getAleatorio () {
    return Math.random();
}

console.log(getAleatorio())

const getAleatorio2 = () => Math.random()

console.log(getAleatorio2())