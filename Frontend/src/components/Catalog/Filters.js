import React, { useContext } from "react";
import { GlobalContext } from "../../context/GlobalState";
import Checkbox from "./Checkbox";

const Filters = () => {
  const { poolTypes, filters, setFilters } = useContext(GlobalContext);

  const handleToggle = ({ name }) => {
    if (filters.indexOf(name) === -1) {
      setFilters([...filters, name]);
    } else {
      setFilters(filters.filter((n) => n !== name));
    }
  };

  return (
    <div className="block pb-10 flex space-x-8">
      <p className="text-xl text-gray-500 font-bold">Type filters</p>
      <div className="flex space-x-8 center">
        {poolTypes.map((name) => (
          <Checkbox
            key={name}
            name={name}
            onChange={() => handleToggle({ name })}
            checked={filters.indexOf(name) !== -1 ? true : false}
          />
        ))}
      </div>
    </div>
  );
};

export default Filters;
