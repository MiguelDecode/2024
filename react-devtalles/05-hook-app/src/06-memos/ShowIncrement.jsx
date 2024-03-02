import PropTypes from "prop-types";

export const ShowIncrement = ({ increment }) => {
  console.log("Me volví a generar");

  return (
    <button className="btn btn-primary" onClick={() => increment(5)}>
      Incrementar
    </button>
  );
};

ShowIncrement.propTypes = {
  increment: PropTypes.func,
};
