import PropTypes from "prop-types";
import { memo } from "react";

/* export const Small = memo(({ value }) => {
  console.log("Me volví a dibujar :(");
  return <small>{value}</small>;
}); */

export const Small = memo(({ value }) => {
  console.log("Me volví a dibujar :(");
  return <small>{value}</small>;
});

Small.displayName = "Small counter";

Small.propTypes = {
  value: PropTypes.number,
};
