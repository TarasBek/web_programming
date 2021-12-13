import React from "react";

const Button = (props) => {
  return (
    <button
      className="bg-blue-400 hover:bg-green-500 text-white font-semibold py-2 px-4 mx-2 rounded inline-flex items-center"
      onClick={props.onClick}
    >
      {props.label}
    </button>
  );
};

export default Button;
