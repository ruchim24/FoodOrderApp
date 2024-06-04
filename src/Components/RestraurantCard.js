import React from "react";
import { CDN_URL } from "../utils/constants";

const RestrautantCard = (props) => {
    const { name, cloudinaryImageId, costForTwo, cuisines, avgRating, sla } = props.resData;
    return (
      <div className="m-[20px] p-3 w-[250px] h-[600px] bg-orange-200 rounded-lg break-words hover:border border-solid border-black">
        <img
          className="h-[200px] w-full mb-4 rounded-lg"
          alt="res-logo"
          src={CDN_URL+cloudinaryImageId}
        />
        <h3 className="font-bold py-4 text-lg">{name}</h3>
        <h4 className="py-1">{cuisines.join(",")}</h4>
        <h4 className="py-1">{costForTwo}</h4>
        <h4 className="py-1">{avgRating} star rating</h4>
        <h4 className="py-1">{sla.deliveryTime} mins</h4>
      </div>
    );
  };

  export const withPromotedLabel = (RestrautantCard) => {
    return (props) => {
      return (
      <div>
        <label className="absolute bg-slate-950 text-white p-2 m-2 rounded-lg">Promoted</label>
        <RestrautantCard {...props}/>
      </div>
      );
    }
  }

  export default RestrautantCard;