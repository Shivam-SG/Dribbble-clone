// pages/index.js
// import Button from '../components/Button'
// components/Button.js
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
  
  

export default function BrowseButton() {
  const handleClick = () => {
    alert('Button clicked!');
  };

  return (
    <div className="flex justify-center items-center mb-12">
      <Button onClick={handleClick}>Browse more inspiration</Button>
    </div>
  );
}
