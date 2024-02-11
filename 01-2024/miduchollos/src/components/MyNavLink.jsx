import { NavLink } from "react-router-dom";

export const MyNavLink = ({ to, children, ...props }) => {
  return (
    <NavLink
      {...props}
      className={({ isActive }) => (isActive ? "is-active" : "")}
      to={to}
    >
      {children}
    </NavLink>
  );
};
