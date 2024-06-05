import React from "react";
import { useDispatch, useSelector } from "react-redux";
import ItemList from "./itemList";
import { clearCart, removeItem } from "../utils/Slices/cartSlice";

const Cart = () => {
    const cartItems = useSelector((store) => store.cart.items);

    const dispatch = useDispatch();

    const handleClear = () => {
        dispatch(clearCart());
    }

    return(
        <div className="text-center m-4 p-4">
          <h1 className="text-2xl font-bold">Cart</h1>
          <div className="w-1/2 m-auto">
            <button 
            className="p-2 m-2 fond-bold text-lg bg-orange-400 text-white rounded-lg"
            onClick={() => handleClear()}
            >
                Clear Cart
            </button>
            {
                cartItems?.length === 0 &&
                <h2 className="text-2xl font-dark m-4 p-4">Your Cart is Empty!!!</h2>
            }
            <ItemList items={cartItems} />
          </div>
        </div>
    );
};

export default Cart;