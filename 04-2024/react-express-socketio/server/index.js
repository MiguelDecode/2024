import express from "express";
import http from "http";
import { Server as SocketServer } from "socket.io";

const app = express();
// Creacion de un server http
const server = http.createServer(app);
// Transformar el server http a un socket
const io = new SocketServer(server);

const question = {
  title:
    "¿Cuál de las siguientes propiedades de CSS se utiliza para cambiar el tamaño del texto en un elemento HTML?",
  options: ["font-size", "text-size", "font-style", "text-style"],
  result: 'font-size'
};

// Evento de escucha del socket
io.on("connection", (socket) => {
  console.log("Client connected");

  //   Escuchar petición de pregunta por parte del cliente
  socket.on("getQuestion", () => {
    // Mandar una pregunta al cliente
    socket.emit("question", question);
  });

  //   Escuchar al cliente. Primer párametro identificador
  socket.on("response", (data) => {
    console.log(data);
  });
});

const port = 4000;
server.listen(port);
console.log("Server on port", port);
