import React from "react";
import { CDN_URL } from "../utils/constants";

const RestrautantCard = (props) => {
    const { name, cloudinaryImageId, costForTwo, cuisines, avgRating, sla } = props.resData;
    return (
      <div className="m-[20px] p-4 w-[250px] h-[550px] bg-orange-200 rounded-lg break-words">
        <img
          className="h-[250px] w-full mb-4 rounded-lg"
          alt="res-logo"
          src={CDN_URL+cloudinaryImageId}
        />
        <h3 className="font-bold py-4 text-lg">{name}</h3>
        <h4>{cuisines.join(",")}</h4>
        <h4>{costForTwo}</h4>
        <h4>{avgRating} star rating</h4>
        <h4>{sla.deliveryTime} mins</h4>
      </div>
    );
  };

  export default RestrautantCard;