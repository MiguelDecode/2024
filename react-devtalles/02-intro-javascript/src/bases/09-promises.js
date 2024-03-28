import { getHerobyId } from "./bases/08-imp-exp";

// Promesas

// const promesa = new Promise((resolve, reject) => {
//   setTimeout(() => {
//     // Tarea
//     const hero = getHerobyId(2);

//     console.log(hero);

//     // resolve(hero);
//     reject("No se pudo encontar el héroe.");
//   }, 2000);
// });

// promesa
//   .then((res) => {
//     console.log("Heroe", res);
//   })
//   .catch((err) => console.warn(err));

const getHerobyIdAsync = (id) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const hero = getHerobyId(id);

      if (!hero) reject("No se pudo encontrar al héroe.");

      resolve(hero);
    }, 1000);
  });
};

getHerobyIdAsync(3).then(console.log).catch(console.warn);
