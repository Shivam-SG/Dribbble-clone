"use client";
import Head from "next/head";
import { useState } from "react";
import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Footer from "../Footer/page";
import Design from "../Design/page";
import Carousel from "../Carousel/page";
import BrowseButton from "../BrowseButton/page";
import Banner from "../Banner/page";
import Shots from "../Shots/page";
import Image from "next/image";

export default function HomePage() {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [CourseDropdownOpen, CoursesetIsDropdownOpen] = useState(false);
  const settings = {
    // dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    rtl: true,
  };

  return (
    <div>
      
      <main className="min-h-screen flex flex-col items-center bg-gray-50 text-gray-900">
        <header className="w-full p-6 flex justify-between items-center">
          <div className="flex gap-4">
            <div
              className="relative group"
              onMouseEnter={() => setIsDropdownOpen(true)}
              onMouseLeave={() => setIsDropdownOpen(false)}
            >
              <a
                href="#"
                className="hover:text-gray-700 flex items-center font-bold text-sm"
              >
                Find designers
                <svg
                  className="ml-1 w-4 h-4"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M19 9l-7 7-7-7"
                  ></path>
                </svg>
              </a>
              {isDropdownOpen && (
                <div className="absolute top-full mt-2 w-48 bg-white shadow-lg rounded-lg p-4 z-10">
                  <a href="#" className="block mb-2 text-gray-700">
                    <p className="font-semibold">Designer search</p>
                    <p className="text-sm text-gray-500">
                      Quickly find your next designer
                    </p>
                  </a>
                  <a href="#" className="block text-gray-700">
                    <p className="font-semibold">Post a job</p>
                    <p className="text-sm text-gray-500">
                      The #1 job board for design talent
                    </p>
                  </a>
                </div>
              )}
            </div>
            <div className="flex space-x-6">
              <a href="#" className="hover:text-gray-700 font-bold text-sm">
                Inspiration
              </a>
              <div
                className="relative group"
                onMouseEnter={() => CoursesetIsDropdownOpen(true)}
                onMouseLeave={() => CoursesetIsDropdownOpen(false)}
              >
                <a
                  href="#"
                  className="hover:text-gray-700 flex items-center font-bold text-sm"
                >
                  Courses
                  <svg
                    className="ml-1 w-4 h-4"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M19 9l-7 7-7-7"
                    ></path>
                  </svg>
                </a>
                {CourseDropdownOpen && (
                  <div className="absolute top-full mt-2 w-48 bg-white shadow-lg rounded-lg p-4 z-10">
                    <a href="#" className="block mb-2 text-gray-700">
                      <p className="font-semibold">UX Diploma</p>
                      <p className="text-sm text-gray-500">
                        Learn UX design from scratch in 6 months
                      </p>
                    </a>
                    <a href="#" className="block text-gray-700">
                      <p className="font-semibold">UI Certificate</p>
                      <p className="text-sm text-gray-500">
                        12-week UI skill building for designers
                      </p>
                    </a>
                  </div>
                )}
              </div>
              <a href="#" className="hover:text-gray-700 font-bold text-sm">
                Jobs
              </a>
              <a href="#" className="hover:text-gray-700 font-bold text-sm">
                Go Pro
              </a>
            </div>
          </div>
          <Image
            src="/images.png"
            alt="Dribbble Logo"
            width={96} // Adjust width as needed
            height={24} // Adjust height as needed
            className="w-24"
          />
          <div className="flex items-center gap-6">
            <div className="relative">
              <input
                type="text"
                placeholder="Search..."
                className="px-4 py-2 rounded-full border border-gray-300 focus:outline-none"
              />
            </div>
            <div className="flex space-x-6 items-center">
              <a href="#" className="hover:text-gray-700">
                Log in
              </a>
              <a
                href="#"
                className="bg-gray-800 text-white px-4 py-2 rounded-full hover:bg-gray-700"
              >
                Sign up
              </a>
            </div>
          </div>
        </header>

        <section className="text-center mt-20">
          <div className="badge bg-black rounded-full mx-60 pl-3 pr-3 pt-2 pb-2 animate-colorChange">
            <p className="text-gray-600">
              Over 3 million ready-to-work creatives!
            </p>
          </div>
          <div className="mt-10">
            <h1 className="text-7xl mb-6 font-serif">
              The world’s destination <br /> for design
            </h1>
          </div>
          <p className="text-black text-lg mb-8">
            Get inspired by the work of millions of top-rated designers &
            agencies around the world.
          </p>
          <button className="bg-gray-800 text-white px-6 py-3 rounded-full hover:bg-gray-700">
            Get started
          </button>
        </section>

        <Carousel/>
        
      </main>
      <Design />
      <BrowseButton/>
      <Banner/>
      <Shots/>
      <Footer />
    </div>
  );
}
