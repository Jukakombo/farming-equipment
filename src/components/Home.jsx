import React from "react";
import TopHeader from "./TopHeader";
import Header from "./Header";
import Footer from "./Footer";
import Homepage from "./Homepage";
import SearchBar from "./SearchBar";
import Categories from "./Categories";
import AboutEting from "./AboutEting";
import HiringEquiptment from "./HiringEquiptment";

function Home() {
  return (
    <div>
      <TopHeader />
      <Header />
      <div className="z-0 md:z-100">
        <div className="z-30 ... rounded-full p-8 bg-red-700">04</div>
        <div className="z-50 ... rounded-full p-8 bg-green-700">03</div>

        <Homepage />
        <SearchBar />
      </div>
      <Categories />
      <AboutEting />
      <HiringEquiptment />
      <Footer />
    </div>
  );
}

export default Home;
