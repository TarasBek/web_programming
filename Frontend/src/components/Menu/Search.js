import React, { useContext } from "react";
import { GlobalContext } from "../../context/GlobalState";

const Search = () => {
  const { setSearchKeyword } = useContext(GlobalContext);

  const onSearchChange = (value) => {
    setSearchKeyword(value.trim().replace(/" "/g, "").toLowerCase());
  };

  return (
    <>
      <div className="flex items-center">
        <svg
          className="w-4 h-4 fill-current text-gray-500 ml-4 z-10"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="black"
        >
          <path d="M0 0h24v24H0V0z" fill="none" />
          <path d="M15.5 14h-.79l-.28-.27C15.41 12.59 16 11.11 16 9.5 16 5.91 13.09 3 9.5 3S3 5.91 3 9.5 5.91 16 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z" />
        </svg>
        <input
          type="search"
          placeholder="Search by name..."
          className="-ml-8 pl-10 px-4 py-2 border rounded-lg text-gray-700 focus:outline-none focus:border-green-500"
          onChange={(e) => onSearchChange(e.target.value)}
        />
      </div>
    </>
  );
};

export default Search;
