import Link from "next/link";

const Button = ({ children, onClick }) => {
  return (
    <button
      className="border-2 border-black text-black text-sm font-semibold hover:border-gray-500 py-4 px-4 rounded-full"
      onClick={onClick}
    >
      {children}
    </button>
  );
};

export default function Banner() {
  return (
    <div className="bg-[#ffda79] flex-col justify-center item-center py-24 px-80">
      <div>
        <h1 className="flex justify-center leading-[70px] font-serif text-black text-[64px]">
          Find your next
          <br /> designer today
        </h1>
      </div>
      <div>
        <h1 className="flex justify-center text-black pt-9 px-36 text-[20px]">
          The world’s leading brands use Dribbble to hire creative talent.
          <br />
          Browse millions of top-rated portfolios to find your perfect creative
          match.
        </h1>
      </div>
      <div className="flex justify-center pt-14 gap-4">
        <button className=" bg-black text-white text-sm font-semibold hover:bg-gray-500 py-4 px-4 rounded-full">Get started now</button>
        <button className=" bg-white text-black text-sm font-semibold hover:text-gray-500 py-4 px-4 rounded-full">Learn about hiring</button>
        
      </div>
      <div className="flex justify-center mt-10">
        <h1 className="text-black text-[20px]">Are you a designer?</h1>
        <Link href="#" className="text-black text-[20px] underline">Join Dribbble</Link>
      </div>
    </div>
  );
}
