import React from "react";
import RestrautantCard from "./RestraurantCard";
import resList from '../utils/mockData';

const Body = () => {
    return (
      <div className="body">
        <div className="search">Search</div>
        <div className="res-container">
          {resList?.map((res) => {
            return <RestrautantCard key={res.info.id} resData={res.info} />;
          })}
        </div>
      </div>
    );
  };

  export default Body;