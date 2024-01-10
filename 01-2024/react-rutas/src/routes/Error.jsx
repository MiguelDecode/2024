import { useRouteError } from "react-router-dom";

export default function Error() {
  const error = useRouteError();

  return (
    <>
      <h1 style={{ color: "red" }}>Ha sucedido un error!!!</h1>
      <h2 style={{ color: "red" }}>{error.statusText || error.message}</h2>
    </>
  );
}
