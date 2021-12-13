import React from "react";
import Pool from "D:/programming/web_labs/8lab/src/Icons/main.png";

const Heading = (props) => {
  return (
    <div className="flex p-24 pt-0 pb-0 ">
      <img src={Pool} alt="" className="sm:w-1/2" />
      <div className="tet-left ml-20">
        <p className="text-3xl text-black font-bold mt-10">{props.pool.name}</p>
        <p className="text-lg text-black font-normal my-4">
        Volume of water: {props.pool.valueOfWater}
        </p>
        <p className="text-lg text-balck font-normal my-4">
        Maximal amount of people: {props.pool.maxAmount}
        </p>
        <p className="text-lg text-balck font-normal my-4">
          Type: {props.pool.type}
        </p>
      </div>
    </div>
  );
};

export default Heading;
