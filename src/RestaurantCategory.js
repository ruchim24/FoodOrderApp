import React, { useState } from "react";
import ItemList from "./Components/itemList";

const RestaurantCategory = ({data}) =>{
   const [open,setOpen] = useState(true);
     return(
        <div className="w-1/2 mx-auto my-4 bg-orange-200 shadow-lg p-4 ">
          <div className="flex justify-between cursor-pointer" onClick={() => setOpen(!open)}>
            <span className="font-bold text-lg">{data.title} ({data?.itemCards?.length})</span>
            <span><i className={`fa-solid ${open ? 'fa-caret-down' : 'fa-caret-up'} icon`} ></i></span>
          </div>
          { open &&
          <ItemList items={data?.itemCards} />
          }
        </div>
     )
}

export default RestaurantCategory;