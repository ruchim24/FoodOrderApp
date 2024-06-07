import React, { useContext, useState } from "react";

const UserData = ({ setModal, setBtnClick, setUserName}) => {
    const [user,setUser] = useState("");
    const [error,setError] = useState(false);
    const handleClick = () => {
        if(user){
        setUserName(user);
        setBtnClick(true);
        setModal(false);
        }else{
          setError(true);
        }
    }
    return(
        <div className="fixed h-full w-full backdrop-brightness-50 z-10">
        <div className="text-center border border-solid border-black bg-orange-300 rounded-lg my-15 p-5 absolute top-[40%] left-[40%] w-[400px] h-[250px]">
            <label className="font-bold text-lg" name="label">Enter Username</label>
            <input 
             className="border border-solid border-black p-4 m-4 rounded-lg" 
             type="text" 
             data-testid="username"
             value={user} 
             onChange={(e) => setUser(e.target.value)} 
             />
             {error && <p className="text-red-700 font-bold text-lg">Username is required!</p>}
            <button className="border border-solid border-black p-4 m-4 bg-orange-400 rounded-lg" onClick={() => handleClick()}>Submit</button>
            <button className="border border-solid border-black p-4 m-4 bg-orange-400 rounded-lg" onClick={() => setModal(false)}>Cancel</button>
        </div>
        </div>
    );
};

export default UserData;