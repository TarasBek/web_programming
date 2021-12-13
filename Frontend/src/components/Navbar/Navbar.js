import React from "react";
import { useLocation } from "react-router";
import Search from "../Menu/Search";

import HeaderItem from "./NavbarItem";

const Navbar = () => {
  const location = useLocation();

  return (
    <div className="flex justify-between flex-row items-center py-4 px-12 border-solid border-b-2 border-gray-300">
      <div className="flex justify-between items-center w-3/5">
        
        <div className="flex">
          <HeaderItem label="Home" path="/" />
          <HeaderItem label="Catalog" path="/catalog" />
          <HeaderItem label="Cart" path="/cart" />
        </div>
      </div>
      {(location.pathname === "/catalog" || location.pathname === "/") && <Search />}
    </div>
  );
};

export default Navbar;
