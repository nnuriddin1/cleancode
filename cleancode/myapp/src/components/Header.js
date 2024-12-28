import { color } from "../utils/colors";

import React from "react";

import Good from "../assets/image.png";
import Star from "../assets/star.png";
import Sand from "../assets/image 2 (1).png";
import Call from "../assets/Call.png";
import Boy from "../assets/Group 9.png";







function Header (){
  return (
    <div className="flex flex-col md:flex-row items-center bg-gray-50 min-h-screen px-6 md:px-20">
      <div className="flex-1 text-center md:text-left">
        <h1 className="text-4xl md:text-6xl font-bold text-gray-800 leading-tight">
          Super Fast <span className={`${color.orangeHeader}`}>Food</span> <br/> <span className={`${color.orangeHeader}`}>Delivery</span> Service
        </h1>
        <p className="mt-4 text-gray-600 text-lg">
          We Provide Super Fast-Delivery Service. Let's Use Our <br/> Services Right Now And Get Discounts Of Up To 50%.
        </p>
        <div className="mt-6 flex flex-col md:flex-row items-center gap-4">
          <button className="bg-orange-500 text-white px-6 py-3 rounded-lg hover:bg-orange-600 transition">
            Explore Food
          </button>
          <h5 className="  px-6 py-3 rounded-lg  transition">
            Download App
          </h5>
        </div>
      </div>
      <div className="   bg-white shadow-md rounded-md w-[154px] h-[54px] relative   space-x-4">
      <img src={Boy} alt="Double sandwich" className="w-16 h-16" />
      
      
        <h3 className=" text-center text-[10px] font-medium text-gray-800 relative bottom-[60px]">Alex Smith</h3>
        <p className=" text-center mt-1 text-[7px] relative bottom-[60px]">Food Deliveryman</p>
        </div>
      

      <div className="relative">
      <img src={Good} alt="" />
      </div>

      <div className="flex items-center gap-4 p-4 bg-white shadow-md rounded-md w-[178px] h-[85px] ">
      <img src={Sand} alt="Double sandwich" className="w-16 h-16" />
      
      <div>
        <h3 className="">Double sandwich</h3>
        
        <div className="">
        <img src={Star} />
        </div>
        
        <p className="mt-1 text-lg font-bold text-[#FF5A5F]">$7.50</p>
      </div>
    </div>

    </div>
  );
};
export default Header;