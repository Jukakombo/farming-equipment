import React from "react";
import { BsFillArrowRightCircleFill, BsFacebook } from "react-icons/bs";
import { BiTime } from "react-icons/bi";
import {
  AiFillTwitterCircle,
  AiFillYoutube,
  AiFillLinkedin,
} from "react-icons/ai";
function TopHeader() {
  return (
    <div className="bg-[#222222] py-2 mobile_screen h-12">
      <div className="w-11/12 m-auto flex items-center justify-between">
        <div className="flex items-center">
          <BsFillArrowRightCircleFill className="icon_color mr-2" size={20} />
          <span className="text-white md:text-[12px] lg:text-lg lg:font-bold ">
            Latest Updates Get latest updates by subscribing to our newsletter1
          </span>
        </div>
        <div className="flex items-center">
          <div className="flex items-center">
            <BiTime className="icon_color mr-2" size={25} />
            <span className="text-white md:text-[12px] lg:text-lg lg:font-bold  mr-4">
              Mon - Sat 9.00 - 18.00
            </span>
          </div>

          <div className="border-l-2 white h-4 ml-1 mx-4" />

          <div className="flex items-center">
            <a href="https://www.facebook.com" className="" target="blank">
              <BsFacebook color="white" className="mx-1" />
            </a>
            <AiFillTwitterCircle color="white" className="mx-1" />
            <AiFillLinkedin color="white" className="mx-1" />
            <AiFillYoutube color="white" className="mx-1" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default TopHeader;
