import { Link } from "react-router-dom";

const style = {
  wrapper: `inline-flex items-center space-x-2 cursor-pointer`,
  logoImage: `h-8`, // Set height for uniform size
  text: `text-white font-semibold `, // White color and bold for 'Bolt'
  m3Text: `text-red-500 font-semibold` // Red color and bold for 'M3'
};

const Logo = () => {
  return (
    <Link to='/'>
      <a className={style.wrapper}>
        <div>
          <img src='/src/assets/images/boltm3-single-bolt.svg' className={style.logoImage} alt="Logo" />
        </div>
        <div>
        <span className={style.text}>Bolt</span>
        <span className={style.m3Text}>M3</span>
        </div>
      </a>
    </Link>
  );
};

export default Logo;
