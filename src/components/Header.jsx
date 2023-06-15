import React, { useState } from "react";
import metaLogo from "../assets/images/metaLogo.png";
import { useNavigate } from "react-router-dom";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";
const Header = () => {
  const navigate = useNavigate();
  const [toggle, setToggle] = useState(false);
  return (
    <div className="max-w-[1200px] mx-auto bg-white">
      <div className="flex justify-between items-center py-[2.2rem]">
        <div className="logoDiv">
          <h1
            className=" text-lg	logo text-blue-500 cursor-pointer "
            onClick={() => navigate("/")}
          >
            <strong>Image</strong>Loader
          </h1>
        </div>
        {!toggle ? (
          <AiOutlineMenu
            className="text-blue-500 text-2xl md:hidden block"
            onClick={() => setToggle(!toggle)}
          />
        ) : (
          <AiOutlineClose
            className="text-blue-500 text-2xl md:hidden block"
            onClick={() => setToggle(!toggle)}
          />
        )}

        {/* full screen  */}
        <ul className="hidden md:flex gap-8 md:gap-14">
          <li
            className="text-[#6f6f6f] font-semibold hover:text-blue-500"
            onClick={() => navigate("/")}
          >
            Home
          </li>
          <li
            className="text-[#6f6f6f] font-semibold hover:text-blue-500  "
            onClick={() => navigate("/history")}
          >
            History
          </li>
          <li
            className="text-[#6f6f6f] font-semibold hover:text-blue-500  "
            onClick={() => navigate("/cart")}
          >
            Cart
          </li>
        </ul>

        {/* Responsive menu */}
        <ul
          className={`duration-500 md:hidden gap-8 md:  bg-blue-400 fixed  top-[90px] ${
            !toggle ? "left-[-100%]" : "left-0"
          } w-full z-10`}
        >
          <li
            className="text-white p-2 ml-8 font-semibold hover:text-blue-500"
            onClick={() => navigate("/")}
          >
            Home
          </li>
          <li
            className="text-white p-2  ml-8 font-semibold hover:text-blue-500  "
            onClick={() => navigate("/history")}
          >
            History
          </li>
          <li
            className="text-white p-2  ml-8 font-semibold hover:text-blue-500  "
            onClick={() => navigate("/cart")}
          >
            Cart
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Header;
