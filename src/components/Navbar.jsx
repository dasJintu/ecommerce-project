import { useState } from "react";
import { Link } from "react-router-dom";

const navigation = [
  "men's clothing",
  "women's clothing",
  "jewelery",
  "electronics",
];

export default function Navbar() {
  const [mobileMenu, setMobileMenu] = useState(false);

  return (
    <nav className="bg-white w-full shadow-lg">
      <div className="py-8 container flex justify-between items-center">
        {/* Hamburger Icon */}
        <button
          className="block md:hidden"
          onClick={() => setMobileMenu(!mobileMenu)}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-7 w-7 text-green-600"
            viewBox="0 0 20 20"
            fill="currentColor"
          >
            <path
              fillRule="evenodd"
              d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
              clipRule="evenodd"
            />
          </svg>
        </button>

        <Link to="/" className="uppercase text-lg font-black text-gray-800">
          The Shop
        </Link>

        {/* desktop menu */}
        <div className="hidden md:flex justify-between items-center gap-8">
          {navigation.map((title) => (
            <Link
              to={`./${title}`}
              className="font-bold text-sm text-gray-500 transition uppercase hover:border-b-4 border-gray-300 cursor-pointer"
              key={title}
            >
              {title}
            </Link>
          ))}
        </div>

        <Link to="/cart">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-7 w-7 -rotT text-green-600"
            viewBox="0 0 20 20"
            fill="currentColor"
          >
            <path
              fillRule="evenodd"
              d="M10 2a4 4 0 00-4 4v1H5a1 1 0 00-.994.89l-1 9A1 1 0 004 18h12a1 1 0 00.994-1.11l-1-9A1 1 0 0015 7h-1V6a4 4 0 00-4-4zm2 5V6a2 2 0 10-4 0v1h4zm-6 3a1 1 0 112 0 1 1 0 01-2 0zm7-1a1 1 0 100 2 1 1 0 000-2z"
              clipRule="evenodd"
            />
          </svg>
        </Link>
      </div>

      {/* Mobile Menu */}
      {mobileMenu && (
        <div className="flex flex-col justify-center items-center gap-8 pb-8">
          {navigation.map((title) => (
            <Link
              to={`./${title}`}
              className="text-sm font-bold text-gray-500 transition uppercase hover:border-b-4 border-gray-300 cursor-pointer"
              key={title}
            >
              {title}
            </Link>
          ))}
        </div>
      )}
    </nav>
  );
}
