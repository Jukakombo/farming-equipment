import React from "react";
import { BsArrowRightCircle } from "react-icons/bs";

function SearchBar() {
  return (
    <div className="lg:w-10/12 md:w-11/12 m-auto md:px-2 search-bar-screen searchbardZindex z-0 md:z-50">
      <div className="bg-[#025002] p-4 px-8">
        <h1 className="pb-4 text-center text-white font-bold uppercase text-lg lg:text-4xl">
          Find The Right Equipment
        </h1>
        <form className="searchbar md:px- lg:px-32 flex items-center justify-around">
          <input
            type="text"
            placeholder="Find equipment..."
            className="outline-none search-bar-screen  rounded-md px-4 py-2"
          />
          <input
            type="text"
            placeholder="Rental duration..."
            className="outline-none search-bar-screen px-4 py-2"
          />
          <button
            type="submit"
            className="search-bar-screen bg-black  rounded-md text-center items-center text-white p-2 uppercase"
          >
            <div className="flex items-center text-center search-bar-btn m-auto">
              <div className="font-bold  md:text-xs uppercase ">
                Find equipment
              </div>
              <BsArrowRightCircle className="ml-4 md:ml-2 " size={25} />
            </div>
          </button>
        </form>
      </div>
    </div>
  );
}

export default SearchBar;
