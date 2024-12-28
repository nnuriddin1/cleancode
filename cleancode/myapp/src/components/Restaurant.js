import React from "react";
import { color, style } from "../utils/style";


import blazePizza from "../assets/Rectangle 53.png"; 
import pizzaRanch from "../assets/Rectangle 53 (1).png";
import dionsPizza from "../assets/Rectangle 53 (2).png";
import royelBurger from "../assets/Rectangle 53 (3).png";
import kfcRestaurant from "../assets/Rectangle 53 (4).png";
import starFood from "../assets/Rectangle 53 (5).png";
import vector from "../assets/Vector (12).png";


function Restaurant() {
  return (
    <div className="p-5 md:p-20">
      <h2 className="text-center text-2xl md:text-4xl font-bold mb-10">
        Top Food <span className="bg-ornage-500">Restaurant</span>
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
        <div className="border p-5 rounded shadow hover:shadow-lg">
          <img src={blazePizza} alt="Blaze Pizza" className={`${style.full}`} />
          <h3 className="font-medium">Blaze Pizza</h3>
          <p className="text-gray-600">11:00 AM - 10:00 PM</p>
          <button className={`${style.buton}`}>
          <img src={vector} className={`${style.vector}`}  />

          </button>
        </div>

        <div className={`${style.border}`}>
          <img src={pizzaRanch} alt="Pizza Ranch" className={`${style.full}`}  />
          <h3 className="font-medium">Pizza Ranch</h3>
          <p className="text-gray-600">09:00 AM - 10:00 PM</p>
          <button className={`${style.buton}`}>
          <img src={vector} className={`${style.vector}`}  />

          </button>
        </div>

        <div className={`${style.border}`}>
          <img src={dionsPizza} alt="Dion's Pizza Hut" className={`${style.full}`}  />
          <h3 className="font-medium">Dion's Pizza Hut</h3>
          <p className="text-gray-600">10:00 AM - 12:00 PM</p>
          <button className={`${style.buton}`}>
          <img src={vector} className={`${style.vector}`}  />
          </button>
        </div>

        <div className={`${style.border}`}>
          <img src={royelBurger} alt="Royel Burger" className={`${style.full}`}  />
          <h3 className="font-medium">Royel Burger</h3>
          <p className="text-gray-600">11:00 AM - 10:00 PM</p>
          <button className={`${style.buton}`}>
          <img src={vector} className={`${style.vector}`}  />

          </button>
        </div>

        <div className={`${style.border}`}>
          <img src={kfcRestaurant} alt="KFC Restaurant" className={`${style.full}`}  />
          <h3 className="font-medium">KFC Restaurant</h3>
          <p className="text-gray-600">09:00 AM - 10:00 PM</p>
          <button className={`${style.buton}`}>
          <img src={vector} className={`${style.vector}`}  />

          </button>
        </div>

        <div className={`${style.border}`}>
          <img src={starFood} alt="Star Food" className={`${style.full}`} />
          <h3 className="font-medium">Star Food</h3>
          <p className="text-gray-600">10:00 AM - 12:00 PM</p>
          <button className={`${style.buton}`}>
          <img src={vector} className={`${style.vector}`}  />

          </button>
        </div>
      </div>
    </div>
  );
}

export default Restaurant;
