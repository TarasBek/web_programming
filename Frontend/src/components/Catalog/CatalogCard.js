import React from "react";
import { Link } from "react-router-dom";
import pool from "D:/programming/web_labs/8lab/src/Icons/main.png";

const CatalogCard = (props) => {
  const poolId = props.pool.id;

  return (
    <div className="w-full bg-black-500 rounded-lg sahdow-lg p-12 flex flex-col justify-center items-center border-solid border-2 border-gray-300">
      <div className="mb-8">
        <img className="h-36 w-36" src={pool} alt="" />
      </div>
      <div className="text-center">
        <p className="text-xl text-black font-bold mb-2">{props.pool.name}</p>
        <p className="text-base text-white-300 f ont-normal">
        Volume of water: {props.pool.valueOfWater}
        </p>
        <p className="text-base text-white-300 f ont-normal">
        Maximal amount of people: {props.pool.maxAmount}
        </p>
        <p className="text-base text-white-300 f ont-normal">
          Type: {props.pool.type}
        </p>
      </div>
      <div className="flex-auto text-right pt-6">
        <Link to={`/catalog/${poolId}`} title="View more">
          <div className="bg-gray-200 hover:bg-blue-400 text-gray-800 font-semibold py-2 px-4 rounded-full inline-flex items-center">
            View more
          </div>
        </Link>
      </div>
    </div>
  );
};

export default CatalogCard;
