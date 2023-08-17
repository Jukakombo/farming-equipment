import React from "react";
import Cta from "./Cta";

function Footer() {
  return (
    <div>
      <Cta />
      <div className="bg-[#111111] text-white py-8">
        {/* form */}
        <div className="md:flex   items-center md:justify-center ">
          <div className="lg:border-l-2 border-white text-center">
            <span className="mx-8 md:text-2xl sm:text-center">
              Newsletter Subscription
            </span>
            <br />
            <span className="mx-8 md:text-2xl sm:text-center">
              Get Latest Deals from E-tinga
            </span>
          </div>
          <div className="mt-8 md:mt-0">
            <form>
              <div className="flex items-center px-6">
                <input
                  type="email"
                  placeholder="Enter Email..."
                  className="mr-4 py-2 px-4 outline-none border-2 border-white bg-transparent"
                />
                <button
                  type="submit"
                  className="bg-[#025002] py-2 px-4 uppercase md:text-2xl"
                >
                  Subscribe
                </button>
              </div>
            </form>
          </div>
        </div>
        <div className="border-b-[1px] border-white w-9/12   m-auto py-4"></div>
        {/* footer links */}
        <div className="flex   justify-around py-8">
          <div className="text-center">
            <span className="uppercase font-bold">About antiga</span>
            <div className="text-center ">
              <div className="border-b-2 w-[100Px] ml-3  my-4 border-yellow-700"></div>
              <div className="border-b-2 w-[50Px]  ml-10 my-4 border-yellow-700"></div>
              <div className="border-b-2 w-[25Px]  ml-14 my-4 border-yellow-700"></div>
            </div>
          </div>
          <div className="">
            <span className="uppercase font-bold">useful links</span>
          </div>
        </div>
        <div className="md:flex  md:justify-evenly px-8 md:px-0">
          <div className="">
            <span>
              TingA is a project of Quipbank Trust Limited that employs modern
            </span>
            <br />
            <span>
              Technology channels to allow farmers access farm mechanization.
            </span>
          </div>
          <div className="my-8 md:my-0">
            <ul>
              <li>About E-tinga</li>
              <li>Equipment List</li>
              <li>Contact U</li>
            </ul>
          </div>
        </div>
        {/* footer copyright */}
        <div className="text-center ">
          <small>
            &copy;2022- {new Date().getFullYear()}{" "}
            <span className="text-green-700">E-tinga</span> - Renting Farm
            Equipments. Terms & Conditions
          </small>
        </div>
      </div>
    </div>
  );
}

export default Footer;
