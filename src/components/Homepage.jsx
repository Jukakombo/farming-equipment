import React from "react";
import { BsSearch } from "react-icons/bs";

function Homepage() {
  const handlerSearch = (e) => {
    e.preventDefault();
  };
  return (
    <div className="bg-green-100 py-32 h-[calc(100vh-7rem)]">
      <div className="text-center">
        <h1 className="font-bold sm:text-md md:text-md lg:text-4xl md:w-[60%] m-auto text uppercase pb-16 ">
          Your One-Stop Source For All Equipment Rental Needs
        </h1>
        <div className="bg-white p-4 md:w-[60%] md:m-auto rounded  mx-4  ">
          <form
            onSubmit={handlerSearch}
            className="flex items-center md:justify-evenly justify-between"
          >
            <input
              type="text"
              className="outline-none md:w-full w-full  md:px-0  px-4 border-r-2  border-b-gray-950"
              placeholder="Search something..."
              name=""
              id=""
            />

            <button type="submit " className="">
              <div className="flex items-center  ">
                <BsSearch className="text-xs ml-4" />
                <div className="text-bold ml-4 md:mr-16">Search</div>
              </div>
            </button>
          </form>
        </div>
        <h1 className=" pt-16 md:w-[60%] m-auto font-bold text-xl ">
          Top-Of-The-Line Equipment Ready At Flexible Rates Around
        </h1>
      </div>
    </div>
  );
}

export default Homepage;
