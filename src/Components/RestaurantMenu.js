import React, { useEffect, useState } from "react";
import Shimmer from "./Shimmer";
import { useParams } from "react-router-dom";

const RestaurantMenu = () => {
  const [resData, setResData] = useState(null);
  const { resId } = useParams();
  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const data = await fetch(
      `https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=26.9124336&lng=75.7872709&restaurantId=${resId}&catalog_qa=undefined&submitAction=ENTER`
    );
    const res = await data.json();
    setResData(res);
  };
 
  if(!resData || !resData?.data?.cards){
    return <Shimmer />
  }

  const {name,cuisines,costForTwoMessage} = resData?.data?.cards?.[2]?.card?.card?.info;
  const menu = resData?.data?.cards?.[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards?.[2]?.card?.card?.itemCards;
  
  return (
    <div className="menu">
      <h1>{name}</h1>
      <p>{cuisines.join(",")} - {costForTwoMessage}</p>
      <h2>Menu</h2>
      <ul>
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
