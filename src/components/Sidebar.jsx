import React from "react";
import { BsChevronDown } from "react-icons/bs";
const Sidebar = () => {
  return (
    <div className="hidden sm:block">
      <div className="bg-white h-24 p-2 grid place-items-center rounded-lg mb-4">
        <h4 className="font-bold text-gray-800">Search Product</h4>
        <hr className="w-full border-1 border-gray-700 " />
        <span className="font-bold text-gray-800">
            <BsChevronDown/>
        </span>
      </div>
      <div className="bg-white h-24 p-2 grid place-items-center rounded-lg mb-4">
        <h4 className="font-bold text-gray-800">Categories</h4>
        <hr className="w-full border-1 border-gray-700 " />
        <span className="font-bold text-gray-800"><BsChevronDown/></span>
      </div>
      <div className="bg-white h-24 p-2 grid place-items-center rounded-lg mb-4">
        <h4 className="font-bold text-gray-800">Brands</h4>
        <hr className="w-full border-1 border-gray-700 " />
        <span className="font-bold text-gray-800"><BsChevronDown/></span>
      </div>
      <div className="bg-white h-24 p-2 grid place-items-center rounded-lg mb-4">
        <h4 className="font-bold text-gray-800">Price Range</h4>
        <hr className="w-full border-1 border-gray-700 " />
        <span className="font-bold text-gray-800"><BsChevronDown/></span>
      </div>
    </div>
  );
};

export default Sidebar;
