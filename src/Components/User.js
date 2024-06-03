import React, { useEffect, useState } from "react";

const User = () => {
   
    useEffect(() =>{
     console.log("first useEffect");
    });

    return(
        <div className="user-card">
            <h1>Name: Ruchi</h1>
            <h2>Location: Khairthal,Raj</h2>
        </div>
    );
};

export default User;