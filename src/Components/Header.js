import React, { useContext, useState } from "react";
import { LOGO_URL } from "../utils/constants";
import { Link } from "react-router-dom";
import UserContext from "../utils/UserContext";

const Header = () => {
  const [btnClick, setBtnClick] = useState(false);
  const { loggedInUser } = useContext(UserContext);
  return (
    <div className="flex justify-between shadow-lg mb-2 bg-orange-300">
      <div className="">
        <img className="w-40" src={LOGO_URL} />
      </div>
      <div className="flex items-center">
        <ul className="flex p-4 m-4">
          <li className="px-4">
            <Link to="/">Home</Link>
          </li>
          <li className="px-4">
            <Link to="/about">About Us</Link>
          </li>
          <li className="px-4">Cart</li>
          <li className="px-4">
            <Link to="/grocery">Grocery</Link>
          </li>
          <button className="border border-solid border-black h-10 w-20 bg-orange-200" onClick={() => setBtnClick(!btnClick)}>
            {btnClick ? "Logout" : "Login"}
          </button>
          <li className="px-4">
            {loggedInUser}
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Header;
