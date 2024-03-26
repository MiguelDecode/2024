export const Button = () => {

    const handleClick = () => {
        console.log('Click!!!')
    }

  return (
    <button
      onClick={handleClick}
      className="rounded bg-sky-600 p-3 text-white font-bold"
    >
      Hola! Hazme Click
    </button>
  );
};
