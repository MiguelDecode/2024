function saludar(nombre) {
  return `Hola ${nombre}`;
}

const saludar2 = (nombre) => `Hola ${nombre}`;

console.log(saludar("Miguel"));

console.log(saludar2("Marta"));

const getUser = () => ({
  uid: "ABC123",
  username: "El_Papi1502",
});

console.log(getUser());

const getUsuarioActivo = (nombre) => ({
  uid: "ABC567",
  username: nombre,
});

const usuarioActivo = getUsuarioActivo("Fernando");

console.log(usuarioActivo);
