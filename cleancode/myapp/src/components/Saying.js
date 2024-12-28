import React from "react";
import { color } from "../utils/colors";

import clientImage from "../assets/Mask Group (14).png"; 
import leftArrow from "../assets/ArrowLeft.png"; 
import rightArrow from "../assets/Group 27.png"; 

function Saying() {
  return (
    <div className="flex flex-col md:flex-row items-center justify-between p-5 md:p-20 bg-gray-50">
      <div className="w-full md:w-1/2 flex justify-center mb-10 md:mb-0">
        <img
          src={clientImage}
          alt="Client"
          className="w-3/4 md:w-3/5 "
        />
      </div>

      <div className="w-full md:w-1/2 text-left">
        <h2 className="text-2xl md:text-4xl font-bold mb-5">
          What Our Client Are <span className={`${color.orangeHeader}`}>Saying</span>
        </h2>
        <p className="text-gray-600 mb-5 leading-relaxed">
          EFood has the most intriguing food order system in the country. UI in
          both their app and web is very simple and easy to use, enhancing the
          UX. Their delivery men are also quite professional and know the
          neighborhood well. Till now I never had to guide them to my address
          for delivery.
        </p>

        <h4 className={`${color.gray}`}>Anglina Jole</h4>
        <p className="text-gray-500 text-sm mb-5">Food lover</p>

        <div className="flex gap-4 align-right">
          <button className={`${color.gray}`}>
            <img src={leftArrow} alt="Previous" className="w-5 h-5" />
          </button>
          <button className={`${color.gray}`}>
            <img src={rightArrow} alt="Next" className="w-5 h-5" />
          </button>
        </div>
      </div>
    </div>
  );
}

export default Saying;
