import React from "react";
import bg_image from "../assets/bg-image.png";
function AboutEting() {
  return (
    <div className="w-11/12 m-auto py-8">
      <div className="bg-image">
        <div className="md:flex ">
          <div className="images">
            <img src={bg_image} alt="bg-image" />
          </div>
          <div className="text-center">
            <h1 className="text-xl text-center py-4">
              About E-tinga Equipments Rental
            </h1>
            <h1 className="text-xl lg:text-4xl font-bold text-center md:w-[70%] md:m-auto">
              We Offer Smarter & More Affordable Access To Rent Farm Equipment
            </h1>
            <div className="py-4">
              <div className="border-b-4 my-2 border-yellow-600 w-[30%] m-auto"></div>
              <div className="border-b-4 my-2 border-yellow-600  w-[20%] m-auto"></div>
              <div className="border-b-4 my-2 border-yellow-600 w-[10%] m-auto"></div>
            </div>
            <p className="w-[75%] m-auto">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit
              vero, corporis dolorem possimus iste aut laborum. Sit rerum ex
              animi.
            </p>
            {/* large scree */}
            <div className="py-8  md:hidden lg:inline-block ">
              <div className="md:flex w-[70%] m-auto">
                <h1 className="md:border-r-2 md:border-gray-500 mr-8 px-8 font-bold">
                  The Facilities Less Expensive
                </h1>
                <span>
                  Velit esse cillum dolore ipsum eu fugiat nulla pariatur.
                </span>
              </div>
              <div className="md:flex pt-4 w-[70%] m-auto">
                <h1 className="md:border-r-2 md:border-gray-500 mr-8 px-8 font-bold">
                  Innovating The Heavy Fleets
                </h1>
                <span>
                  Velit esse cillum dolore ipsum eu fugiat nulla pariatur.
                </span>
              </div>
            </div>
          </div>
        </div>
        {/* medium screen */}
        <div className="py-8 lg:hidden mobile_screen">
          <div className="md:flex w-[95%] m-auto">
            <h1 className="md:border-r-2 md:border-gray-500 mr-8 px-8 font-bold">
              The Facilities Less Expensive
            </h1>
            <span>
              Velit esse cillum dolore ipsum eu fugiat nulla pariatur.
            </span>
          </div>
          <div className="md:flex pt-4 w-[95%] m-auto">
            <h1 className="md:border-r-2 md:border-gray-500 mr-8 px-8 font-bold">
              Innovating The Heavy Fleets
            </h1>
            <span>
              Velit esse cillum dolore ipsum eu fugiat nulla pariatur.
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AboutEting;
