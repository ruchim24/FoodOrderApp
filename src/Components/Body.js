import React, { useEffect, useState } from "react";
import RestrautantCard from "./RestraurantCard";
import resList from '../utils/mockData';
import Shimmer from "./Shimmer";

const Body = () => {
   const [listOfRestraurants,setListOfRestraurants] = useState([]);
   const [data,setData] = useState([]);
   const [searchText,setSearchText] = useState("");

   useEffect(() => {
    fetchData();
  },[]);

   const fetchData = async () => {
     const data = await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=26.9124336&lng=75.7872709&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING");
     const res = await data.json();
     setListOfRestraurants(res?.data?.cards?.[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
     setData(res?.data?.cards?.[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
    }

    const handleClick = () => {
      const filteredData = listOfRestraurants?.filter(y => y?.info?.avgRating > 4);
      setData(filteredData);
    }
 
    const handleSearch = () => {
      const filteredData = listOfRestraurants?.filter(res => res?.info?.name?.toUpperCase().includes(searchText?.toUpperCase()));
      setData(filteredData);
    };

    const handleChange = (e) => {
       setSearchText(e.target.value);
    };
    
    return  listOfRestraurants.length === 0 ?
     <Shimmer /> 
     : (
      <div className="body">
        <div className="filter">
          <div className="search">
            <input 
              type="text" 
              className="search-box" 
              value={searchText}
              placeholder="Search Restaurant Name..."
              onChange={(e) => handleChange(e)}
            />
            <button onClick={() => handleSearch()}>Search</button>
          </div>
            <button className="filter-btn" onClick={() => handleClick()}>
                Top Rated Restraurants
            </button>
        </div>
        <div className="res-container">
          {data?.map((res) => {
            return <RestrautantCard key={res.info.id} resData={res.info} />;
          })}
        </div>
      </div>
    );
  };

  export default Body;