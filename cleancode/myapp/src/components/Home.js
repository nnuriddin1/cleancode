import React from "react";
import { color } from "../utils/colors";
import deliveryMan from "../assets/food delivery 4.png"; 
import fastDeliveryIcon from "../assets/stopwatch 1.png";
import deliveryMenIcon from "../assets/Delivery icon.png";
import restaurantIcon from "../assets/Resturent.png";

function Home() {
  return (
    <div className="flex flex-col md:flex-row items-center justify-between p-5 md:p-20 bg-gray-50">
      <div className="w-full md:w-1/2 flex justify-center mb-10 md:mb-0">
        <img src={deliveryMan} alt="Delivery Man" className="w-3/4 md:w-full" />
      </div>

      <div className="w-full md:w-1/2">
        <h2 className="text-2xl md:text-4xl font-bold mb-5 text-left">
          <span className={`${color.orangeHeader}`}>Stay</span> At Home, We Will <br/> Provide <span className={`${color.orangeHeader}`}>Good Food</span>
        </h2>
        <p className="text-gray-600 mb-5 text-justify">
          We provide tasty food and superfast delivery at <br/> your home. Let’s use our services right now and <br/> get discounts of up to 50%.
        </p>

        <ul className="mb-5 space-y-3">
          <li className="flex  gap-3">
            <img src={fastDeliveryIcon} alt="Fast Delivery" className="w-6 h-6" />
            <span>Fasted Delivery in 30 Minutes</span>
          </li>
          <li className="flex gap-3">
            <img src={deliveryMenIcon} alt="Delivery Men" className="w-6 h-6" />
            <span>300+ Delivery Men</span>
          </li>
          <li className="flex  gap-3">
            <img src={restaurantIcon} alt="Restaurant & Cafe Shop" className="w-6 h-6" />
            <span>500+ Restaurant & Cafe Shop</span>
          </li>
        </ul>

        <button className="bg-orange-500 text-white px-6 py-2 rounded shadow hover:bg-orange-600 transition duration-300 ">
          See more
        </button>
      </div>
    </div>
  );
}

export default Home;
