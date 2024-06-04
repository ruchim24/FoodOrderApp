import React from "react";

const ItemList = ({items}) => {
    return(
        <div>
                {items?.map((item) => {
                    const itm = item?.card?.info;
                    return(
                    <div 
                    key={itm?.id}
                    className="p-2 m-2 border-orange-300 border-b-2 text-left flex justify-between"
                    >
                        <div className="text-left w-9/12">
                        <div className="font-bold text-lg">
                            <span className="text-left">{itm?.name}</span>
                            <span>- ₹{itm?.price ? itm?.price/100 : itm?.defaultPrice/100}</span>
                        </div>
                        <p>{itm?.description}</p>
                        </div>
                        <img className="ml-4 h-[100px] w-[100px] rounded-lg w-3/12" src={"https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,h_600/" + itm?.imageId}/>
                    </div>
                    )
                })}
        </div>
    );
};

export default ItemList;