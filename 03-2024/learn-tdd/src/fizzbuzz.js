/*
Escribir una función que al pasarle un número:
    - Muestra "fizz" si es múltiplo de 3.
    - Muestra "buzz" si es múltiplo de 5.
    - Muestra "fizzbuzz" si es múltiplo de 3 y 5.
    - Muestra el número si no es múltiplo de ninguno de los anteriores.
 */

export const fizzbuzz = (num) => {
  if (typeof num !== 'number') {
    throw new Error('parameter provided must be a number')
  }

  if (Number.isNaN(num)) throw new Error('parameter provided must be a number')

  const multiplies = { 3: 'fizz', 5: 'buzz', 7: 'woff' }

  let output = ''

  Object.entries(multiplies).forEach(([multiplier, word]) => {
    if (num % multiplier === 0) output += word
  })

  //   if (num % 3 === 0 && num % 5 === 0) return 'fizzbuzz'
  //   if (num % 3 === 0) return 'fizz'
  //   if (num % 5 === 0) return 'buzz'

  return output === '' ? num : output
}
