import React from "react";

import poolpng from "D:/programming/web_labs/10lab/src/Icons/main.png";
import { increment, decrement, remove } from "D:/programming/web_labs/10lab/src/redux/actions";
import { useDispatch } from "react-redux";

const CartItem = ({ pool }) => {
    const dispatch = useDispatch();

    return (
        <div className="w-full bg-white-500 rounded-lg sahdow-lg flex flex-row justify-between items-center border-solid border-2 border-gray-300 my-4">
            <div className="flex items-center ml-4">
                <img className="h-28 w-28" src={poolpng} alt="" />
                <div className="text-center ml-8">
                    <p className="text-xl text-black font-bold mb-2">{pool.poolName}</p>
                </div>
            </div>
            <div className="flex items-center">
                <button
                    className="text-lg text-gray-800 hover:bg-red-400 bg-gray-300 w-10 h-10 rounded-md font-medium"
                    onClick={() => dispatch(decrement(pool.poolId))}
                >
                    -
                </button>
                <p className="text-black text-lg mx-4 font-semibold">{pool.quantity}</p>
                <button
                    className="text-lg text-gray-800 hover:bg-green-400 bg-gray-300 w-10 h-10 rounded-md font-medium"
                    onClick={() => dispatch(increment(pool.poolId))}
                >
                    +
                </button>
            </div>
            <p className="text-black text-lg font-semibold">${pool.maxAmount}</p>
            <button
                onClick={() => dispatch(remove(pool.poolId))}
                className="block bg-gray-300 hover:bg-red-400 text-gray-800 font-semibold py-2 px-4 rounded-full inline-flex mr-8"
                title="Remove pool"
            >
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="feather feather-trash-2"
                >
                    <polyline points="3 6 5 6 21 6"></polyline>
                    <path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"></path>
                    <line x1="10" y1="11" x2="10" y2="17"></line>
                    <line x1="14" y1="11" x2="14" y2="17"></line>
                </svg>
            </button>
        </div>
    );
};

export default CartItem;
