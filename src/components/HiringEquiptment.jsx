import React from "react";
import { Link } from "react-router-dom";
import compaction from "../assets/compaction.webp";
function HiringEquiptment() {
  return (
    <div className="md:bg-black md:p-8">
      <div className="md:w-8/12 m-auto md:flex ">
        <div className="md:w-full">
          <img
            src={compaction}
            alt="compaction "
            className="w-full md:h-full lg:h-full "
          />
        </div>
        <div className="p-8 md:p-2 lg:p-8 w-full text-center  bg-gray-100">
          <h1 className="font-bold  py-4">Worried About The Idling Yard?</h1>
          <p>Start hiring our equipment(s) today!</p>
          <Link to="/learn-more">
            <button className="p-4 my-8 rounded-md bg-[#F26E21] uppercase text-white font-bold ">
              Learn More
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default HiringEquiptment;
