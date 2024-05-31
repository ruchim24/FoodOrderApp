import React, { useEffect, useState } from "react";
import RestrautantCard from "./RestraurantCard";
import resList from '../utils/mockData';
import Shimmer from "./Shimmer";

const Body = () => {
   const [listOfRestraurants,setListOfRestraurants] = useState([]);
   
   const fetchData = async () => {
     const data = await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=26.9124336&lng=75.7872709&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING");
     const res = await data.json();
     setListOfRestraurants(res?.data?.cards?.[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
    }

    useEffect(() => {
      fetchData();
    },[]);

    const handleClick = () => {
      const filterData = listOfRestraurants?.filter(y => y?.info?.avgRating >= 4.5);
      setListOfRestraurants(filterData);
    }
 
    
    return  listOfRestraurants.length === 0 ?
     <Shimmer /> 
     : (
      <div className="body">
        <div className="filter">
            <button className="filter-btn" onClick={() => handleClick()}>
                Top Rated Restraurants
            </button>
        </div>
        <div className="res-container">
          {listOfRestraurants?.map((res) => {
            return <RestrautantCard key={res.info.id} resData={res.info} />;
          })}
        </div>
      </div>
    );
  };

  export default Body;