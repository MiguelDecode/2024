import io from "socket.io-client";
import { useEffect, useState } from "react";

const socket = io("/");

const App = () => {
  const [response, setResponse] = useState("");
  const [question, setQuestion] = useState(null);

  // Primera petición de una pregunta
  useEffect(() => {
    socket.emit("getQuestion");
  }, []);

  // Recibir una respuesta del servidor
  socket.on("question", (question) => {
    setQuestion(question);
  });

  // Recibir desde el server si la respuesta dada es correcta
  socket.on("result", (isCorrect) => {
    // !: Se ejecuta 3 veces, necesario revisar porque.
    console.log("Recibiendo si la respuesta es correcta");
    console.log(isCorrect);
  });

  const handleSubmit = (event) => {
    event.preventDefault();

    // Mandar mensaje al servidor. Primer párametro identificador
    socket.emit("response", response);
  };

  const handleChange = (event) => {
    setResponse(event.target.value);
  };

  return (
    <div
      style={{
        maxWidth: "768px",
      }}
    >
      {question ? (
        <form onSubmit={handleSubmit}>
          <h2>{question.title}</h2>

          <fieldset
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(2, 1fr)",
              gap: "1rem",
              padding: "1rem",
            }}
          >
            {question.options.map((option) => (
              <div key={option}>
                <input
                  type="radio"
                  name="response"
                  id={option}
                  value={option}
                  onChange={handleChange}
                />
                <label htmlFor={option}>{option}</label>
              </div>
            ))}
          </fieldset>

          <button>Enviar respuesta</button>
        </form>
      ) : (
        <div>Cargando...</div>
      )}
    </div>
  );
};

export default App;
