import { useEffect, useState } from "react";
import io from "socket.io-client";

const socket = io("/");

function App() {
  const [message, setMessage] = useState("");
  const [messages, setMessages] = useState([]);

  const handleSubmit = (event) => {
    event.preventDefault();
    const newMessage = {
      body: message,
      from: "Me",
    };
    setMessages([...messages, newMessage]);
    socket.emit("message", message);
  };

  useEffect(() => {
    socket.on("message", receiveMessage);

    return () => {
      socket.off("message", receiveMessage);
    };
  }, []);

  const receiveMessage = (message) =>
    setMessages((state) => [...state, message]);

  return (
    <div className="h-screen bg-zinc-800 text-white flex items-center justify-center">
      <form className="bg-zinc-900 p-10" onSubmit={handleSubmit}>
        <h1 className="text-2xl font-bold my-2">Chat React</h1>
        <input
          className="border-2 border-zinc-500 p-2 w-full text-black"
          type="text"
          placeholder="Write your message..."
          onChange={(event) => setMessage(event.target.value)}
        />

        <ul>
          {messages.map((message, index) => (
            <li
              key={index}
              className={`my-2 p-2 table rounded-md ${
                message.from === "Me" ? "bg-sky-700" : "bg-black ml-auto"
              }`}
            >
              <b className="text-xs text-slate-300 block">{message.from}</b>
              {message.body}
            </li>
          ))}
        </ul>
      </form>
    </div>
  );
}

export default App;
