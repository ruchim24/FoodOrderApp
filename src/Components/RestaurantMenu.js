import React, { useState } from "react";
import Shimmer from "./Shimmer";
import { useParams } from "react-router-dom";
import useRestaurantMenu from "../utils/useRestaurantMenu";
import RestaurantCategory from "../RestaurantCategory";

const RestaurantMenu = () => {
  const { resId } = useParams();
  const [open, setOpen] = useState(null);

  const resData = useRestaurantMenu(resId);

  if (!resData || !resData?.data?.cards) {
    return <Shimmer />;
  }

  const { name, cuisines, costForTwoMessage } =
    resData?.data?.cards?.[2]?.card?.card?.info;

  const categories =
    resData?.data?.cards?.[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards?.filter(
      (y) =>
        y?.card?.card?.["@type"] ===
        "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"
    );

  return (
    <div className="text-center">
      <h1 className="font-bold my-6 text-2xl">{name}</h1>
      <p className="font-bold text-lg">
        {cuisines.join(",")} - {costForTwoMessage}
      </p>
      {categories?.map((cat, index) => (
        <RestaurantCategory
          key={cat?.card?.card?.title}
          data={cat?.card?.card}
          open={open === index ? true : false}
          setOpen={() => setOpen(open == index ? null : index)}
        />
      ))}
    </div>
  );
};

export default RestaurantMenu;
