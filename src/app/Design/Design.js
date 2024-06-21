import Image from "next/image";
import { FaEye, FaHeart } from "react-icons/fa";

const Design = () => {
  const items = [
    {
      src: "/d1.jpg",
      author: "Matt Erickson",
      authorImg: "/a1.jpg",
      pro: true,
      likes: 61,
      views: "8.8k",
    },
    {
      src: "/d2.jpg",
      author: "Kendrick Kidd",
      authorImg: "/a2.jpg",
      pro: true,
      likes: 305,
      views: "113k",
    },
    {
      src: "/d3.png",
      author: "Matt Erickson",
      authorImg: "/a3.png",
      pro: true,
      likes: 61,
      views: 8800,
    },
    {
      src: "/d4.jpg",
      author: "Matt Erickson",
      authorImg: "/a4.jpg",
      pro: true,
      likes: 61,
      views: 8800,
    },
    {
      src: "/d5.jpg",
      author: "Matt Erickson",
      authorImg: "/a5.jpg",
      pro: true,
      likes: 61,
      views: 8800,
    },
    {
      src: "/d6.jpg",
      author: "Matt Erickson",
      authorImg: "/a6.jpg",
      pro: true,
      likes: 61,
      views: 8800,
    },
    {
      src: "/d7.png",
      author: "Matt Erickson",
      authorImg: "/a7.png",
      pro: true,
      likes: 61,
      views: 8800,
    },
    {
      src: "/d8.jpg",
      author: "Matt Erickson",
      authorImg: "/a8.jpg",
      pro: true,
      likes: 61,
      views: 8800,
    },
    {
      src: "/d1.jpg",
      author: "Matt Erickson",
      authorImg: "/a1.jpg",
      pro: true,
      likes: 61,
      views: "8.8k",
    },
    {
      src: "/d2.jpg",
      author: "Kendrick Kidd",
      authorImg: "/a2.jpg",
      pro: true,
      likes: 305,
      views: "113k",
    },
    {
      src: "/d3.png",
      author: "Matt Erickson",
      authorImg: "/a3.png",
      pro: true,
      likes: 61,
      views: 8800,
    },
    {
      src: "/d4.jpg",
      author: "Matt Erickson",
      authorImg: "/a4.jpg",
      pro: true,
      likes: 61,
      views: 8800,
    },
    {
      src: "/d5.jpg",
      author: "Matt Erickson",
      authorImg: "/a5.jpg",
      pro: true,
      likes: 61,
      views: 8800,
    },
    {
      src: "/d6.jpg",
      author: "Matt Erickson",
      authorImg: "/a6.jpg",
      pro: true,
      likes: 61,
      views: 8800,
    },
    {
      src: "/d7.png",
      author: "Matt Erickson",
      authorImg: "/a7.png",
      pro: true,
      likes: 61,
      views: 8800,
    },
    {
      src: "/d8.jpg",
      author: "Matt Erickson",
      authorImg: "/a8.jpg",
      pro: true,
      likes: 61,
      views: 8800,
    },
    {
      src: "/d1.jpg",
      author: "Matt Erickson",
      authorImg: "/a1.jpg",
      pro: true,
      likes: 61,
      views: "8.8k",
    },
    {
      src: "/d2.jpg",
      author: "Kendrick Kidd",
      authorImg: "/a2.jpg",
      pro: true,
      likes: 305,
      views: "113k",
    },
    {
      src: "/d3.png",
      author: "Matt Erickson",
      authorImg: "/a3.png",
      pro: true,
      likes: 61,
      views: 8800,
    },
    {
      src: "/d4.jpg",
      author: "Matt Erickson",
      authorImg: "/a4.jpg",
      pro: true,
      likes: 61,
      views: 8800,
    },
    {
      src: "/d5.jpg",
      author: "Matt Erickson",
      authorImg: "/a5.jpg",
      pro: true,
      likes: 61,
      views: 8800,
    },
    {
      src: "/d6.jpg",
      author: "Matt Erickson",
      authorImg: "/a6.jpg",
      pro: true,
      likes: 61,
      views: 8800,
    },
    {
      src: "/d7.png",
      author: "Matt Erickson",
      authorImg: "/a7.png",
      pro: true,
      likes: 61,
      views: 8800,
    },
    {
      src: "/d8.jpg",
      author: "Matt Erickson",
      authorImg: "/a8.jpg",
      pro: true,
      likes: 61,
      views: 8800,
    },
  ];

  return (
    <div className="mt-12">
      <h1 className="flex justify-center text-black text-5xl">
        Explore inspiring designs
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-9 m-12 p-12">
        {items.map((item, index) => (
          <div key={index} className="flex flex-col items-center">
            <div className="relative w-full h-64 bg-gray-200 rounded-2xl overflow-hidden">
              <Image
                src={item.src}
                alt={`Image by ${item.author}`}
                layout="fill"
                objectFit="cover"
              />
            </div>
            <div className="flex gap-12">
              <div className="flex items-center mt-4">
                <Image
                  src={item.authorImg}
                  alt={item.author}
                  width={25}
                  height={25}
                  className="rounded-full"
                />
                <div className="ml-2 flex items-center">
                  <p className="text-[12px] text-black">{item.author}</p>
                  {item.pro && (
                    <span className="text-white text-[9px] bg-gray-400 ml-2 px-1 rounded">
                      PRO
                    </span>
                  )}
                </div>
              </div>
              <div className="flex items-center mt-4 text-gray-600">
                <div className="flex items-center mr-4">
                  <FaHeart className="h-3 w-3" />
                  <span className="ml-1 text-[12px]">{item.likes}</span>
                </div>
                <div className="flex items-center">
                  <FaEye className="h-3 w-3" />
                  <span className="ml-1 text-[12px]">
                    {item.views.toLocaleString()}
                  </span>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Design;
