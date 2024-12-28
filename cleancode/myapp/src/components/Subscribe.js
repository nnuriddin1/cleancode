import React from 'react';
import Tg from"../assets/Group (8).png"

function Subscribe (){
  return (
    <div className="bg-orange-500 py-10 px-6 rounded-md text-center text-white max-w-[1170px] mx-auto md:px-10 sm:px-4">
    <h2 className="text-2xl font-bold mb-2 sm:text-xl">
      Subscribe to get the Latest Offer
    </h2>
    <p className="text-sm mb-6 sm:text-xs">
      Get our daily updates by subscribing to our newspaper, please drop your email below
    </p>
    <div className="flex items-center justify-center">
      <div className="relative w-full max-w-md sm:flex sm:items-center sm:space-x-2">
        <input
          type="email"
          placeholder="Enter your email address"
          className="w-full px-4 py-3 text-gray-700 rounded-full focus:outline-none sm:rounded-r-none"
        />
        <button className=" mx-auto pt-[25px] px-6 py-3 rounded-full sm:rounded-l-none sm:rounded-r-full text-white  flex items-center space-x-2  shadow-xl bg-orange-500">
          <img src={Tg} alt="Telegram" className="w-5 h-5 sm:w-4 sm:h-4" />
          <span>Subscribe</span>
        </button>
      </div>
    </div>
  </div>
  );
};

export default Subscribe;
