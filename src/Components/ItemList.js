import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addItem, removeItem } from "../utils/Slices/cartSlice";

const ItemList = ({ items, add }) => {
  const dispatch = useDispatch();
  const handleClick = (item) => {
    if(add){
    dispatch(addItem(item));
    }else{
        dispatch(removeItem({id: item?.card?.info?.id}));
    }
  };

  return (
    <div>
      {items?.map((item) => {
        const itm = item?.card?.info;
        return (
          <div
            data-testid="items"
            key={itm?.id}
            className="p-2 m-2 border-orange-300 border-b-2 text-left flex justify-between"
          >
            <div className="text-left w-9/12">
              <div className="font-bold text-lg">
                <span className="text-left">{itm?.name}</span>
                <span>
                  - ₹{itm?.price ? itm?.price / 100 : itm?.defaultPrice / 100}
                </span>
              </div>
              <p>{itm?.description}</p>
            </div>
            <div className="w-3/12">
              <img
                className="ml-4 h-[100px]  rounded-lg w-full"
                src={
                  "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,h_600/" +
                  itm?.imageId
                }
                onError={e => e.target.style.display = 'none'} 
              />
              <button
                className="flex relative justify-center ml-auto mt-[-20px] z-10 bg-black text-white rounded-lg p-2 mr-10"
                onClick={() => handleClick(item)}
              >
               {add ? "Add+" : "Remove"} 
              </button>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default ItemList;
