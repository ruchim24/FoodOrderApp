import React from "react";
import { CDN_URL } from "../utils/constants";

const RestrautantCard = (props) => {
    const { name, cloudinaryImageId, costForTwo, cuisines, avgRating, sla } =
      props.resData;
    return (
      <div className="res-card">
        <img
          className="res-img"
          alt="res-logo"
          src={CDN_URL+cloudinaryImageId}
        />
        <h3>{name}</h3>
        <h4>{cuisines.join(",")}</h4>
        <h4>{costForTwo}</h4>
        <h4>{avgRating} star rating</h4>
        <h4>{sla.deliveryTime} mins</h4>
      </div>
    );
  };

  export default RestrautantCard;