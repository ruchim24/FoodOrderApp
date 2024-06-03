import React, { useEffect, useState } from "react";
import RestrautantCard from "./RestraurantCard";
import resList from '../utils/mockData';
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";

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
    
   const onlineStatus = useOnlineStatus();

   if(!onlineStatus){
    return <h1>Looks like you are offline!! Please check you internet connection.</h1>
   }


    return  listOfRestraurants.length === 0 ?
     <Shimmer /> 
     : (
      <div className="body">
        <div className="filter flex">
          <div className="search mx-8 my-2 p-2">
            <input 
              type="text" 
              className="h-14 w-56 p-2 border border-solid border-black focus:border-orange-300" 
              value={searchText}
              placeholder="Search Restaurant Name..."
              onChange={(e) => handleChange(e)}
            />
            <button className="h-14 px-4 bg-orange-300 ml-2 rounded-lg" onClick={() => handleSearch()}>Search</button>
          </div>
            <button className="h-14 p-4 bg-orange-300 m-4 rounded-lg" onClick={() => handleClick()}>
                Top Rated Restraurants
            </button>
        </div>
        <div className="flex flex-wrap mx-4">
          {data?.map((res) => {
            return <Link key={res.info.id} to={"/restaurant/"+res.info.id}><RestrautantCard  resData={res.info} /></Link>;
          })}
        </div>
      </div>
    );
  };

  export default Body;