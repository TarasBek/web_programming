import React from "react";
import pool from "D:/programming/web_labs/10lab/src/Icons/main.png";

const Card = (props) => {
  return (
    <div className="w-full bg-white-500 rounded-lg sahdow-lg p-12 flex flex-col justify-center items-center border-solid border-2 border-gray-800">
      <div className="mb-8">
        <img className="h-36 w-36" src={pool} alt="" />
      </div>
      <div className="text-center">
        <p className="text-xl text-black font-bold mb-2">{props.pool.name}</p>
        <p className="text-base text-black-300 f ont-normal">
          Volume of water: {props.pool.valueOfWater}
        </p>
        <p className="text-base text-black-300 f ont-normal">
          Maximal amount of people: {props.pool.maxAmount}
        </p>
        <p className="text-base text-black-300 f ont-normal">
          Type: {props.pool.type}
        </p>
      </div>
    </div>
  );
};

export default Card;
