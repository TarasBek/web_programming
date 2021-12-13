import React from "react";
import Wrapper from "../components/Cards/Wrapper";
import CartItem from "D:/programming/web_labs/10lab/src/Cart/CartItem.js";
import { useSelector } from "react-redux";
import NoDataText from "../components/NoDataText/NoDataText";


const Cart = () => {
    const cart = useSelector((state) => state.cart);

    return (
        <Wrapper>
            <div className="flex justify-center">
                <p className="text-3xl text-black font-bold mb-8">Shopping Cart</p>
            </div>
            {cart.length > 0 ? (
                <React.Fragment>
                    {cart.map((pool) => (
                        <CartItem key={pool.poolId} pool={pool} />
                    ))}
                    <div className="flex flex-row justify-end mt-8">
                        <p className="text-xl text-gray-500 font-bold mb-8">
                            Total price:
                        </p>
                        <p className="text-xl text-balck font-bold mb-8 ml-2">
                            {cart.map((pool) => pool.maxAmount).reduce((prev, curr) => prev + curr)}
                            $
                        </p>
                    </div>
                </React.Fragment>
            ) : (
                <NoDataText text="Cart is empty" />
            )}
        </Wrapper>
    );
}

export default Cart;
