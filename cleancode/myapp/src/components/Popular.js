import React from "react";
import { color } from "../utils/colors";
import burgerIcon from "../assets/burger 1.png"; 
import pizzaIcon from "../assets/Group (6).png";
import sandwichIcon from "../assets/Group (7).png";
import asianFoodIcon from "../assets/christmas-dinner 2.png";
import setMenuIcon from "../assets/dish 1.png";
import burger1 from "../assets/item_01-480x480 1.png"; 
import burger2 from "../assets/Burger.png";
import burger3 from "../assets/item_01-480x480 1 (1).png";
import burger4 from "../assets/item_01-480x480 1 (2).png";
import burger5 from "../assets/item_01-480x480 1 (3).png";
import content from "../assets/Content.png";


function Popular() {
  return (
    <div className="p-5 md:p-20 bg-gray-50">
      <h2 className="text-center text-2xl md:text-4xl font-bold mb-10">
        Our Popular <span className={`${color.orangeHeader}`}>Category</span>
      </h2>

      {/* Categories */}
      <div className="flex justify-center gap-7 mb-10 ">
        <button className="flex flex-col items-center w-[210px] h-[70px] rounded-lg	 bg-[#FF7A50]">
          <img src={burgerIcon} alt="Burger" className="w-12 h-12" />
          <span className="text-white  font-medium">Burger</span>
        </button>
        <button className="flex flex-col items-center  w-[210px] h-[70px] rounded-lg bg-white">
          <img src={pizzaIcon} alt="Pizza" className="w-12 h-12" />
          <span className="font-medium">Pizza</span>
        </button>
        <button className="flex flex-col items-center  w-[210px] h-[70px] rounded-lg bg-white">
          <img src={sandwichIcon} alt="Sandwich" className="w-12 h-12" />
          <span className="font-medium">Sandwich</span>
        </button>
        <button className="flex flex-col items-center  w-[210px] h-[70px] rounded-lg bg-white">
          <img src={asianFoodIcon} alt="Asian Food" className="w-12 h-12" />
          <span className="font-medium">Asian Food</span>
        </button>
        <button className="flex flex-col items-center  w-[210px] h-[70px] rounded-lg bg-white ">
          <img src={setMenuIcon} alt="Set Menu" className="w-12 h-12" />
          <span className="font-medium">Set Menu</span>
        </button>
      </div>

      {/* Burger List */}
      <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-5">
        <div className="border p-5 text-center rounded shadow hover:shadow-lg">
          <img src={burger1} alt="Cheeseburger With Salad" className="w-full mb-3" />
          <h3 className="font-medium">Cheeseburger With Salad</h3>
          <p className="text-orange-500 font-bold">$18.00</p>
          <button className="bg-orange-500 text-white px-4 py-2 rounded mt-3">
            Add to Cart
          </button>
        </div>

        <div className="border p-5 text-center rounded shadow hover:shadow-lg">
          <img src={burger2} alt="Beef Burger" className="w-full mb-3" />
          <h3 className="font-medium">Beef Burger</h3>
          <p className="text-orange-500 font-bold">$15.00</p>
          <button className="bg-orange-500 text-white px-4 py-2 rounded mt-3">
            Add to Cart
          </button>
        </div>

        <div className="border p-5 text-center rounded shadow hover:shadow-lg">
          <img src={burger3} alt="Royal Cheeseburger" className="w-full mb-3" />
          <h3 className="font-medium">Royal Cheeseburger</h3>
          <p className="text-orange-500 font-bold">$16.00</p>
          <button className="bg-orange-500 text-white px-4 py-2 rounded mt-3">
            Add to Cart
          </button>
        </div>

        <div className="border p-5 text-center rounded shadow hover:shadow-lg">
          <img src={burger4} alt="Black Gamburger" className="w-full mb-3" />
          <h3 className="font-medium">Black Gamburger</h3>
          <p className="text-orange-500 font-bold">$14.00</p>
          <button className="bg-orange-500 text-white px-4 py-2 rounded mt-3">
            Add to Cart
          </button>
        </div>

        <div className="border p-5 text-center rounded shadow hover:shadow-lg">
          <img src={burger5} alt="Chicken Burger" className="w-full mb-3" />
          <h3 className="font-medium">Chicken Burger</h3>
          <p className="text-orange-500 font-bold">$15.00</p>
          <button className="bg-orange-500 text-white px-4 py-2 rounded mt-3">
            Add to Cart
          </button>
        </div>
      </div>
      <div>
      <img src={content} alt="" className="w-[208px] mx-auto justify-center relative top-[40px]" />

      </div>
    </div>
  );
}

export default Popular;
