import React from "react";
import { NavLink } from "react-router-dom";

const NavbarItem = (props) => {
  return (
    <NavLink
      to={props.path}
      className="mx-4 no-underline py-2 px-4 rounded-3xl text-black"
      activeClassName="bg-gray-200"
      exact
    >
      {props.label}
    </NavLink>
  );
};

export default NavbarItem;
