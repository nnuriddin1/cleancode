import React from "react";
import { color } from "../utils/colors";

import appStoreIcon from "../assets/Store=App Store, Style=Black.png"; 
import googlePlayIcon from "../assets/Store=Google Play, Style=Black.png"; 
import phonesMockup from "../assets/Group 178.png"; 

function Mobile() {
  return (
    <div className="flex flex-col items-center md:flex-row justify-between p-5 md:p-20 bg-gray-50">
      <div className="w-full md:w-1/2 mb-10 md:mb-0">
        <h2 className="text-2xl md:text-4xl font-bold mb-5 text-left">
          Download <span className={`${color.orangeHeader}`}>Our Mobile App</span>
        </h2>
        <p className="text-gray-600 mb-5 text-justify">
          It's all at your fingertips — the restaurants you love. Find the right
          food to suit your mood, and make the first bite last. Download the app
          now and get up to 50% off
        </p>

        <div className="flex gap-4">
          <div >
            <img src={appStoreIcon}  />
          </div>
          <div>
            <img src={googlePlayIcon}  />
          </div>
        </div>

      </div>

      <div className="w-full md:w-1/2 flex justify-center">
        <img
          src={phonesMockup}
          className=" md:w-3/4 lg:w-2/3 shadow-lg rounded-lg"
        />
      </div>
    </div>
  );
}

export default Mobile;
