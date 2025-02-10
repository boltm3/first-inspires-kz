import { useState } from "react";
import { Link } from "react-router-dom";

const style = {
  wrapper: `inline-flex items-center space-x-2 cursor-pointer ml-4`,
  logoImage: `h-8`,
  text: `text-black font-semibold`,
  m3Text: `text-red-500 font-semibold`,
};

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="sticky top-0 w-full  bg-white shadow-md z-50">
      <div className="container h-14 flex items-center justify-between">
        <Link to="/" className={style.wrapper}>
          <div className="ml-4">
            <img
              src="https://first.image.firstinspireskz.org/first-logo.png"
              alt="FIRST Robotics"
              className="h-8"
            />
          </div>
          <div>
            <img
              src="https://first.image.firstinspireskz.org/kz-flag.png"
              className={style.logoImage}
              alt="Logo"
            />
          </div>
        </Link>

        <nav className="hidden md:flex gap-6 ml-8">
  <Link to="/about" className="hover:text-blue-600">  
    Біз туралы  
  </Link>  
  <Link to="/community" className="hover:text-blue-600">  
    Қауымдастық  
  </Link>  
  <Link to="/learn" className="hover:text-blue-600">  
    Оқу  
  </Link>  
  <Link to="/contact" className="hover:text-blue-600">  
    Байланыс
  </Link>  
  <Link to="/help" className="hover:text-blue-600">  
    Көмек  
  </Link>  

  {/* 添加 Bolt.m3 图片链接，并向右添加 margin */}
  <a 
    href="https://boltm3.firstinspireskz.org/" 
    target="_blank" 
    rel="noopener noreferrer" 
    className="pr-7"
  >
    <img 
      src="https://first.image.firstinspireskz.org/powered-by-boltm3.png" 
      alt="Powered by Bolt.m3" 
      className="h-8"
    />
  </a>
</nav>



        <div className="md:hidden">
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

          {isMenuOpen && (
            <div className="absolute top-15 left-0 right-0 bg-white shadow-lg p-4 md:hidden z-40">
              <Link to="/" className="block py-2 hover:text-blue-600">
                Басты бет
              </Link>
              <Link to="/about" className="block py-2 hover:text-blue-600">
                Біз туралы
              </Link>
              <Link to="/community" className="block py-2 hover:text-blue-600">
                Қауымдастық
              </Link>
              <Link to="/learn" className="block py-2 hover:text-blue-600">
                Оқу
              </Link>
              <Link to="/contact" className="block py-2 hover:text-blue-600">
                Байланыс
              </Link>
              <Link to="/help" className="block py-2 hover:text-blue-600">
                Көмек
              </Link>
            </div>
          )}
        </div>
      </div>
    </header>
  );
};

export default Header;
