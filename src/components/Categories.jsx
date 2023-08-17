import React from "react";
import { categories } from "./database";

function Categories() {
  return (
    <div className="w-11/12 m-auto mt-8">
      <p className="uppercase text-center text-lg">
        We Promise To Find You The Right Equipment
      </p>
      <h1 className="text-center py-8 md:text-lg lg:text-2xl xl:text-4xl text-gray-400 sm:text-sm uppercase">
        Browse Machinery Categories
      </h1>
      <div className="grid sm:grid-cols-1 md:grid-cols-3 gap-2 md:gap-4 lg:gap-8 2xl:gap-10 ">
        {categories.map((x) => (
          <div
            className="bg-[#C4C4C4] rounded-md p-2 overflow-hidden  "
            key={x._id}
          >
            <div className="card_info">
              <img
                src={x.image}
                alt="card_category"
                className="w-full h-[250px]"
              />
              <div className="">
                <h1 className="uppercase font-bold text-center py-2">
                  {x.category}
                </h1>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Categories;
