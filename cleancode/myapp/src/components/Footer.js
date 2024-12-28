import React from 'react';
import { color } from "../utils/colors";

import facebookIcon from '../assets/facebook (1).png';
import twitterIcon from '../assets/twitter (1).png';
import instagramIcon from '../assets/instagram (1).png';
import pinterestIcon from '../assets/pinterest.png';



function Footer (){
  return (
    <footer className="bg-gray-100 text-gray-700 py-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          <div>
            <h3 className="text-lg font-semibold mb-4">EFood</h3>
            <p>Dhaka, Bangladesh</p>
            <p>📞 0943833339</p>
            <p>📧 support@efood.com</p>
            <div className="flex space-x-4 mt-4">
              <a href="#" className={`${color.textgray}`}>
                <img src={facebookIcon} alt="Facebook" className="w-6 h-6" />
              </a>
              <a href="#" className={`${color.textgray}`}>
                <img src={twitterIcon} alt="Twitter" className="w-6 h-6" />
              </a>
              <a href="#" className={`${color.textgray}`}>
                <img src={instagramIcon} alt="Instagram" className="w-6 h-6" />
              </a>
              <a href="#" className={`${color.textgray}`}>
                <img src={pinterestIcon} alt="Pinterest" className="w-6 h-6" />
              </a>
            </div>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4">Service</h4>
            <ul>
              <li><a href="#" className={`${color.under}`}>How it works</a></li>
              <li><a href="#" className={`${color.under}`}>Home delivery</a></li>
              <li><a href="#" className={`${color.under}`}>Products</a></li>
              <li><a href="#" className={`${color.under}`}>Menu</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4">Company</h4>
            <ul>
              <li><a href="#" className={`${color.under}`}>About Us</a></li>
              <li><a href="#" className={`${color.under}`}>News</a></li>
              <li><a href="#" className={`${color.under}`}>Our trusted partner</a></li>
              <li><a href="#" className={`${color.under}`}>New users FAQ</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4">Supports</h4>
            <ul>
              <li><a href="#" className={`${color.under}`}>Help center</a></li>
              <li><a href="#" className={`${color.under}`}>Feedback</a></li>
              <li><a href="#" className={`${color.under}`}>Contact us</a></li>
              <li><a href="#" className={`${color.under}`}>Terms & conditions</a></li>
            </ul>
          </div>
        </div>

        <div className="mt-8 border-t pt-4 text-center md:flex md:justify-between md:items-center">
          <p className="text-sm">© 2021 EFood - All rights reserved.</p>
          <div className="flex space-x-4 mt-4 md:mt-0">
            <a href="#" className={`${color.textgray}`}>
              <p>Privacy</p>
            </a>
            <a href="#" className={`${color.textgray}`}>
              <p>Securty</p>
            </a>
            <a href="#" className={`${color.textgray}`}>
              <p>Terms</p>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
