const regresaTrue = () => {
  console.log("Regresa True");
  return true;
};

const regresaFalse = () => {
  console.log("Regresa False");
  return false;
};

console.warn("Not o la negación");
console.log(true);
console.log(!true);
console.log(!false);
console.log(!!false);

console.log(!regresaFalse());
console.log(!regresaTrue());

console.warn("And");
console.log(true && true);
console.log(true && false)

console.log('4 condiciones', true && true && true && false)

console.log(regresaFalse() && regresaTrue())

console.warn('OR')
console.log(true || false)
console.log(true || true)
console.log(false || false)

console.log('4 condiciones', true || true || true || false)

console.warn('Asignaciones')

const soyUndefined = undefined;
const soyNull = null;
const soyFalso = false

const a1 = true && 'Hola Mundo' && 150
const a2 = 'Hola' && 'Mundo' && soyFalso
const a3 = soyFalso || 'Ya no soy falso'
const a4 = soyFalso || soyUndefined || soyNull || 'Ya no soy falso'
const a5 = soyFalso || soyUndefined || soyNull || 'Ya no soy falso' || true

console.log({a1, a2, a3, a4, a5})

if(true || true || true || false) {
  console.log('Hacer algo')
} else {
  console.log('Hacer otra cosa')
}


