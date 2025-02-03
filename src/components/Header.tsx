import { useState } from 'react';
import { Link } from 'react-router-dom';

const style = {
  wrapper: `inline-flex items-center space-x-2 cursor-pointer ml-4`, // Add margin-left to move the logo to the right
  logoImage: `h-8`, // Set height for uniform size
  text: `text-black font-semibold`, // White color and bold for 'Bolt'
  m3Text: `text-red-500 font-semibold` // Red color and bold for 'M3'
};

const Header = () => {
  // State to manage the mobile menu toggle
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Toggle the menu open/close
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="sticky top-0 w-full border-b bg-white shadow-md z-50">
      <div className="container h-14 flex items-center justify-between">

        {/* Logo or Brand Name */}
        <Link to="/" className={style.wrapper}> {/* Wrapped in Link to make logo clickable */}
          {/* FIRST Logo */}
          <div className="ml-4">
            <img
              src="https://www.firstinspires.org/sites/all/themes/first/assets/images/2020/first-horz-rgb.png"
              alt="FIRST Robotics"
              className="h-8"
            />
          </div>
          {
          <div>
            <img
              src="https://ad2ab94.webp.ee/boltm3-single-bolt.svg"
              className={style.logoImage}
              alt="Logo"
            />
          </div>
          }
          {/*
          <div>
            <span className={style.text}>Bolt</span>
            <span className={style.m3Text}>M3</span>
          </div>
          */}

          
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex gap-6 ml-8">
          <Link to="/about" className="hover:text-blue-600">About</Link>
          <Link to="/community" className="hover:text-blue-600">Community</Link>
          <Link to="/learn" className="hover:text-blue-600">Learn</Link>
          <Link to="/contact" className="hover:text-blue-600">Contact</Link>
          <Link to="/help" className="hover:text-blue-600">Help</Link> {/* Added Help */}
        </nav>

        {/* Mobile Navigation */}
        <div className="md:hidden">
          {/* Toggle Button for Mobile Navigation */}
          <button
            onClick={toggleMenu}
            className="p-2 rounded-md hover:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-gray-300"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6 text-gray-700"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
            >
              <path
                d="M4 6h16M4 12h16M4 18h16"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
              />
            </svg>
          </button>

          {/* Dropdown Menu - Conditional Rendering based on state */}
          {isMenuOpen && (
            <div className="absolute top-15 left-0 right-0 bg-white shadow-lg p-4 md:hidden z-40">
              <Link to="/" className="block py-2 hover:text-blue-600">Home</Link>
              <Link to="/about" className="block py-2 hover:text-blue-600">About</Link>
              <Link to="/community" className="block py-2 hover:text-blue-600">Community</Link>
              <Link to="/learn" className="block py-2 hover:text-blue-600">Learn</Link>
              <Link to="/contact" className="block py-2 hover:text-blue-600">Contact</Link>
              <Link to="/help" className="block py-2 hover:text-blue-600">Help</Link> {/* Added Help */}
            </div>
          )}
        </div>

      </div>
    </header>
  );
};

export default Header;
