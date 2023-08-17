import React, { useState } from "react";
import { FiHeadphones } from "react-icons/fi";
import { AiFillCloseCircle, AiOutlineMenu } from "react-icons/ai";
import { navlinks } from "./database";
import { Link } from "react-router-dom";
import logo from "../assets/logo.jpg";
function Header() {
  const [openMenu, setOpenMenu] = useState(false);

  // const closeMenu = () => {
  //   setOpenMenu(false);
  // };
  const openMenuf = () => {
    setOpenMenu((prev) => !prev);
  };
  return (
    <div className="sm:h-16 md:h-16  lg:h-20 bg-white py-2 ">
      <div className=" flex items-center w-11/12 m-auto justify-between">
        <div className="flex items-center ">
          <div className="logo">
            <img src={logo} alt="logo" className="" />
          </div>

          <div className="flex items-center mobile_screen sm:hidden md:hidden lg:flex  ">
            <div className="border-l-2 border-gray-400 md:h-8 lg:h-12 ml-4" />
            <FiHeadphones className="icon_color mx-4" size={30} />
            <div className="text-center uppercase">
              <span className="sm:text-sm md:text-[12px] lg:text-2xl">
                Get quick Support
              </span>
              <br />
              <span className="sm:text-sm md:text-[12px] lg:text-2xl">
                +212698487054
              </span>
            </div>
            <div className="border-l-2 border-gray-400 md:h-8 lg:h-12 ml-4" />
          </div>
        </div>
        {/* desktop view */}
        <div className="desktop_view">
          <ul className="flex items-center md:text-[12px] lg:text-lg">
            {navlinks.map((x) => (
              <li
                className="mx-2 font-bold cursor-pointer md:text-sm lg:text-lg"
                key={x._id}
              >
                {x.link}
              </li>
            ))}
          </ul>
        </div>
        {/* mobile view */}
        <div className="md:hidden">
          <div className="absolute top-4 right-4" onClick={openMenuf}>
            {openMenu ? (
              <AiFillCloseCircle size={30} />
            ) : (
              <AiOutlineMenu onClick={() => setOpenMenu(false)} size={25} />
            )}
          </div>
        </div>
      </div>
      {/* mobile view links */}
      {openMenu && (
        <ul className="flex flex-col px-4 bg-green-50 mt-2  ">
          {navlinks.map((x) => (
            <Link key={x._id} to={`/${x.link}`}>
              <li
                onClick={() => setOpenMenu(false)}
                className="mt-8 hover:bg-green-100 hover:rounded hover:p-2 hover: "
                key={x._id}
              >
                {x.link}
              </li>
            </Link>
          ))}
        </ul>
      )}
    </div>
  );
}

export default Header;
