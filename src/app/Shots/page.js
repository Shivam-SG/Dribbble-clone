import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Image from "next/image";

export default function Shots() {
  const settings = {
    infinite: true,
    speed: 4000,
    slidesToShow: 7,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 0,
    cssEase: "linear",
    arrows: false,
    ltr: true,
    // pauseOnHover: true,
    dots: false,
  };

  return (
    <div className="w-full transition-transform duration-500 ease-in-out mt-12">
      <Slider {...settings}>
        <div className="p-2 w-auto">
          <Image
            alt=""
            src="/s1.webp"
            width={200}
            height={200}
            className=" object-fit rounded-3xl"
          />
          <div className=" bottom-0 mb-2 left-2 bg-black bg-opacity-0 text-white p-2">
            <h1 className="text-black">Illustration</h1>
          </div>
        </div>

        <div className="p-2">
          <Image
            alt=""
            src="/s3.webp"
            width={200}
            height={200}
            className=" object-fit rounded-3xl"
          />
          <div className=" bottom-0 mb-2 left-2 bg-black bg-opacity-0 text-white p-2">
            <h1 className="text-black">Animation</h1>
          </div>
        </div>

        <div className="p-2">
          <Image
            alt=""
            src="/s4.webp"
            width={200}
            height={200}
            className=" object-fit rounded-3xl"
          />
          <div className=" bottom-0 mb-2 left-2 bg-black bg-opacity-0 text-white p-2">
            <h1 className="text-black">Web Design</h1>
          </div>
        </div>

        <div className="p-2">
          <Image
            alt=""
            src="/s5.webp"
            width={200}
            height={200}
            className=" object-fit rounded-3xl"
          />
          <div className=" bottom-0 mb-2 left-2 bg-black bg-opacity-0 text-white p-2">
            <h1 className="text-black">Branding</h1>
          </div>
        </div>

        <div className="p-2">
          <Image
            alt=""
            src="/s4.webp"
            width={200}
            height={200}
            className=" object-fit rounded-3xl"
          />
          <div className=" bottom-0 mb-2 left-2 bg-black bg-opacity-0 text-white p-2">
            <h1 className="text-black">Web Design</h1>
          </div>
        </div>

        <div className="p-2 w-auto">
          <Image
            alt=""
            src="/s1.webp"
            width={200}
            height={200}
            className=" object-fit rounded-3xl"
          />
          <div className=" bottom-0 mb-2 left-2 bg-black bg-opacity-0 text-white p-2">
            <h1 className="text-black">Illustration</h1>
          </div>
        </div>

        <div className="p-2">
          <Image
            alt=""
            src="/s3.webp"
            width={200}
            height={200}
            className=" object-fit rounded-3xl"
          />
          <div className=" bottom-0 mb-2 left-2 bg-black bg-opacity-0 text-white p-2">
            <h1 className="text-black">Animation</h1>
          </div>
        </div>

        <div className="p-2">
          <Image
            alt=""
            src="/s4.webp"
            width={200}
            height={200}
            className=" object-fit rounded-3xl"
          />
          <div className=" bottom-0 mb-2 left-2 bg-black bg-opacity-0 text-white p-2">
            <h1 className="text-black">Web Design</h1>
          </div>
        </div>

        <div className="p-2">
          <Image
            alt=""
            src="/s5.webp"
            width={200}
            height={200}
            className=" object-fit rounded-3xl"
          />
          <div className=" bottom-0 mb-2 left-2 bg-black bg-opacity-0 text-white p-2">
            <h1 className="text-black">Branding</h1>
          </div>
        </div>

        <div className="p-2">
          <Image
            alt=""
            src="/s4.webp"
            width={200}
            height={200}
            className=" object-fit rounded-3xl"
          />
          <div className=" bottom-0 mb-2 left-2 bg-black bg-opacity-0 text-white p-2">
            <h1 className="text-black">Web Design</h1>
          </div>
        </div>
      </Slider>
    </div>
  );
}
