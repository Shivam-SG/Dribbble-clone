import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Image from "next/image";

export default function Carousel() {
  const settings = {
    infinite: true,
    speed: 4000,
    slidesToShow: 5,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 0,
    cssEase: "linear",
    arrows: false,
    ltr: true,
    pauseOnHover: false,
    dots: false,
  };

  return (
    <div className="w-full transition-transform duration-500 ease-in-out mt-12">
      <Slider {...settings}>
        <div className="p-4 relative">
          <Image
            alt=""
            src="/1.webp"
            width={300}
            height={300}
            className=" object-fit rounded-3xl"
          />
          <div className="absolute bottom-0 mb-2 left-2 w-full bg-black bg-opacity-0 text-white p-4 rounded-lg">
            <div className="font-bold text-lg">Daniele Buffa</div>
            <div className="text-gray-300">Principal Designer</div>
            <div className="flex justify-center space-x-2 mt-2">
              <span className="px-2 py-1 border rounded-full text-sm">
                Animation
              </span>
              <span className="px-2 py-1 border rounded-full text-sm">UI</span>
              <span className="px-2 py-1 border rounded-full text-sm">
                Visual
              </span>
            </div>
          </div>
        </div>
        <div className="p-4 relative">
          <Image
            alt=""
            src="/2.webp"
            width={300}
            height={300}
            className=" object-fit rounded-3xl"
          />
          <div className="absolute bottom-0 mb-2 left-2 w-full bg-black bg-opacity-0 text-white p-4 rounded-lg">
            <div className="font-bold text-lg">Dan Mall</div>
            <div className="text-gray-300">Design Educator</div>
            <div className="flex justify-center space-x-2 mt-2">
              <span className="px-2 py-1 border rounded-full text-sm">
                Product
              </span>
              <span className="px-2 py-1 border rounded-full text-sm">UX</span>
            </div>
          </div>
        </div>
        <div className="p-4 relative">
          <Image
            alt=""
            src="/3.webp"
            width={300}
            height={300}
            className=" object-fit rounded-3xl"
          />
          <div className="absolute bottom-0 mb-2 left-2 w-full bg-black bg-opacity-0 text-white p-4 rounded-lg">
            <div className="font-bold text-lg">Jesse Showalter</div>
            <div className="text-gray-300">Design Educator</div>
            <div className="flex justify-center space-x-2 mt-2">
              <span className="px-2 py-1 border rounded-full text-sm">UI</span>
              <span className="px-2 py-1 border rounded-full text-sm">Web</span>
              <span className="px-2 py-1 border rounded-full text-sm">
                Mobile
              </span>
            </div>
          </div>
        </div>
        <div className="p-4 relative">
          <Image
            alt=""
            src="/4.webp"
            width={300}
            height={300}
            className=" object-fit rounded-3xl"
          />
          <div className="absolute bottom-0 mb-2 left-02w-full bg-black bg-opacity-0 text-white p-4 rounded-lg">
            <div className="font-bold text-lg">Lilla Bardenova</div>
            <div className="text-gray-300">Brand + Illustrator</div>
            <div className="flex justify-center space-x-2 mt-2">
              <span className="px-2 py-1 border rounded-full text-sm">
                Brand
              </span>
              <span className="px-2 py-1 border rounded-full text-sm">
                Illustration
              </span>
              <span className="px-2 py-1 border rounded-full text-sm">Web</span>
            </div>
          </div>
        </div>

        <div className="p-4 relative">
          <Image
            alt=""
            src="/5.webp"
            width={300}
            height={300}
            className=" object-fit rounded-3xl"
          />
          <div className="absolute bottom-0 mb-2 left-2 w-full bg-black bg-opacity-0 text-white p-4 rounded-lg">
            <div className="font-bold text-lg">Lilla Bardenova</div>
            <div className="text-gray-300">Brand + Illustrator</div>
            <div className="flex justify-center space-x-2 mt-2">
              <span className="px-2 py-1 border rounded-full text-sm">
                Brand
              </span>
              <span className="px-2 py-1 border rounded-full text-sm">
                Illustration
              </span>
              <span className="px-2 py-1 border rounded-full text-sm">Web</span>
            </div>
          </div>
        </div>
      </Slider>
    </div>
  );
}
