import React from "react";

const Checkbox = ({ name, onChange, checked }) => {
  return (
    <div>
      <label className="inline-flex items-center">
        <input
          type="checkbox"
          className="form-checkbox"
          onChange={onChange}
          checked={checked}
        />
        <span className="ml-2">{name}</span>
      </label>
    </div>
  );
};

export default Checkbox;
