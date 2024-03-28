const persona = {
  nombre: "Tony",
  edad: 45,
  clave: "Ironman",
};

// const { nombre: name, edad: age, clave: heroName } = persona;
const { nombre, edad, clave } = persona;

console.log(nombre, edad, clave);
// console.log(name, age, heroName);

const useSpecialContext = ({ nombre, edad, clave, rango = "Capitán" }) => {
  // console.log(nombre, edad, clave, rango);

  return {
    clave,
    edad,
    nombre,
    latlng: {
      lat: 12.252,
      lng: -28.59,
    },
  };
};

const {
  clave: key,
  edad: age,
  nombre: name,
  latlng: { lat, lng },
} = useSpecialContext(persona);

console.log(name, age, key);
console.log(lat, lng);
