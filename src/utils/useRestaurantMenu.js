import { useEffect, useState } from "react";

const useRestaurantMenu = (resId) => {
  const [resData,setResData] = useState(null);
   useEffect(()=>{
      fetchData();
   },[]);

   const fetchData = async () => {
    const data = await fetch(
      `https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=26.9124336&lng=75.7872709&restaurantId=${resId}&catalog_qa=undefined&submitAction=ENTER`
    );
    const res = await data.json();
    setResData(res);
  };

    return resData;
};

export default useRestaurantMenu;
