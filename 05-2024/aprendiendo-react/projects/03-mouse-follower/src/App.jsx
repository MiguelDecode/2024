import { useEffect, useState } from "react";

const FollowMouse = () => {
  const [enable, setEnable] = useState(false);
  const [position, setPosition] = useState({ x: -40, y: -40 });

  const toggleCursorFollow = () => {
    setEnable(!enable);
  };

  useEffect(() => {
    console.log("useEffect", { enable });

    const handleMove = (event) => {
      const { clientX, clientY } = event;
      setPosition({ x: clientX, y: clientY });
    };

    if (enable) {
      window.addEventListener("pointermove", handleMove);
    }

    return () => {
      console.log("Cleanup");
      window.removeEventListener("pointermove", handleMove);
      setPosition({ x: -40, y: -40 });
    };
  }, [enable]);

  return (
    <>
      <div
        style={{
          position: "absolute",
          border: "2px solid #09f",
          borderRadius: "50%",
          opacity: "0.8",
          pointerEvents: "none",
          left: -20,
          top: -20,
          width: 40,
          height: 40,
          transform: `translate(${position.x}px, ${position.y}px)`,
        }}
      />
      <button onClick={toggleCursorFollow}>
        {enable ? "Desactivar" : "Activar"} seguir puntero
      </button>
    </>
  );
};

function App() {
  return (
    <main>
      <FollowMouse />
    </main>
  );
}

export default App;
