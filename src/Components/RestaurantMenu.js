import React from "react";
import Shimmer from "./Shimmer";
import { useParams } from "react-router-dom";
import useRestaurantMenu from "../utils/useRestaurantMenu";

const RestaurantMenu = () => {
  
  const { resId } = useParams();
   
  const resData = useRestaurantMenu(resId);
 
  if(!resData || !resData?.data?.cards){
    return <Shimmer />
  }

  const {name,cuisines,costForTwoMessage} = resData?.data?.cards?.[2]?.card?.card?.info;
  const menu = resData?.data?.cards?.[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards?.[2]?.card?.card?.itemCards;
  
  return (
    <div className="m-4 p-4 flex-row">
      <h1 className="font-bold text-lg py-3">{name}</h1>
      <p className="py-2">{cuisines.join(",")} - {costForTwoMessage}</p>
      <h2 className="font-bold pb-2 underline decoration-solid">Menu</h2>
      <ul className="list-disc pl-4">
        {
            menu?.map((item) => {
            const itm = item?.card?.info;
            return <li key={itm?.id}>{itm?.name} - {itm.defaultPrice ? itm?.defaultPrice/100 : itm.price/100} INR</li>
        })
        }
      </ul>
    </div>
  );
};

export default RestaurantMenu;
