import React, { useContext, useState } from "react";
import { LOGO_URL } from "../utils/constants";
import { Link } from "react-router-dom";
import UserContext from "../utils/UserContext";
import { useSelector } from "react-redux";
import UserData from "./UserData";

const Header = () => {
  const [btnClick, setBtnClick] = useState(false);
  const [modal, setModal] = useState(false);
  const { loggedInUser, setUserName } = useContext(UserContext);

  const cartItems = useSelector((store) => store.cart.items);

  const handleLogIn = () => {
    if (!btnClick) {
      setModal(true);
    } else {
      setUserName("");
      setBtnClick(!btnClick);
    }
  };

  console.log(cartItems);
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
          <li className="px-4 font-bold text-lg">
            <Link to="/cart">Cart ({cartItems?.length})</Link>
          </li>
          <li className="px-4">
            <Link to="/grocery">Grocery</Link>
          </li>
          {loggedInUser && <li className="px-4 font-bold text-lg">{loggedInUser}</li>}
          <button onClick={() => handleLogIn()}>
            {btnClick ? "Logout" : "Login"}
          </button>
        </ul>
      </div>
      {modal && <UserData setModal={setModal} setBtnClick={setBtnClick} setUserName={setUserName} />}
    </div>
  );
};

export default Header;
