// components/Footer.js

import React from "react";
import Image from "next/image";

import {
  FaTwitter,
  FaFacebookF,
  FaInstagram,
  FaPinterestP,
} from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-white py-8">
      <div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center flex-wrap">
          <div className="flex items-center">
            <Image src="/images.png" alt="Dribbble Logo" width={24}
                  height={25} />
            <img src="/images.png" alt="Dribbble Logo" className="w-24" />
          </div>
          <div className="flex space-x-12 mt-4 lg:mt-0">
            <a
              href="#"
              className="text-gray-600 text-sm hover:text-gray-900 font-bold"
            >
              For designers
            </a>
            <a
              href="#"
              className="text-gray-600 text-sm hover:text-gray-900 font-bold"
            >
              Hire talent
            </a>
            <a
              href="#"
              className="text-gray-600 text-sm hover:text-gray-900 font-bold"
            >
              Inspiration
            </a>
            <a
              href="#"
              className="text-gray-600 text-sm hover:text-gray-900 font-bold"
            >
              Advertising
            </a>
            <a
              href="#"
              className="text-gray-600 text-sm hover:text-gray-900 font-bold"
            >
              Blog
            </a>
            <a
              href="#"
              className="text-gray-600 text-sm hover:text-gray-900 font-bold"
            >
              About
            </a>
            <a
              href="#"
              className="text-gray-600 text-sm hover:text-gray-900 font-bold"
            >
              Careers
            </a>
            <a
              href="#"
              className="text-gray-600 text-sm hover:text-gray-900 font-bold"
            >
              Support
            </a>
          </div>
          <div className="flex space-x-4 mt-4 lg:mt-0">
            <a href="#" className="text-gray-600 hover:text-gray-900">
              <FaTwitter />
            </a>
            <a href="#" className="text-gray-600 hover:text-gray-900">
              <FaFacebookF />
            </a>
            <a href="#" className="text-gray-600 hover:text-gray-900">
              <FaInstagram />
            </a>
            <a href="#" className="text-gray-600 hover:text-gray-900">
              <FaPinterestP />
            </a>
          </div>
        </div>
        <div className="mt-16 flex justify-between items-center flex-wrap">
          <div className="text-gray-600 text-sm flex">
            &copy; 2024 Dribbble
            <div className="flex space-x-6 mt-4 lg:mt-0 ml-3">
              <a href="#" className="text-gray-600 text-sm hover:text-gray-900">
                Terms
              </a>
              <a href="#" className="text-gray-600 text-sm hover:text-gray-900">
                Privacy
              </a>
              <a href="#" className="text-gray-600 text-sm hover:text-gray-900">
                Cookies
              </a>
            </div>
          </div>

          <div className="flex space-x-6 mt-4 lg:mt-0">
            <a href="#" className="text-gray-600 text-sm hover:text-gray-900">
              Jobs
            </a>
            <a href="#" className="text-gray-600 text-sm hover:text-gray-900">
              Designers
            </a>
            <a href="#" className="text-gray-600 text-sm hover:text-gray-900">
              Freelancers
            </a>
            <a href="#" className="text-gray-600 text-sm hover:text-gray-900">
              Tags
            </a>
            <a href="#" className="text-gray-600 text-sm hover:text-gray-900">
              Places
            </a>
            <a href="#" className="text-gray-600 text-sm hover:text-gray-900">
              Resources
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
