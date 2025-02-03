import { Link } from "react-router-dom";
const Hero = () => {
  return (
    <div
      className="relative text-center bg-cover bg-center text-white min-h-[50vh] flex flex-col justify-center items-center overflow-hidden"
      style={{ backgroundImage: "url(https://ad2ab94.webp.ee/fizmat-ftc.jpg)" }}
    >
      {/* Overlay */}
      <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-blue-600 to-transparent z-10" />
      
      {/* Content */}
      <div className="relative z-20 p-4">
        <h4 className="text-4xl mb-4">
          A NATIONAL ROBOTICS COMMUNITY IN KAZAKHSTAN EMPOWERING YOUTH FOR THE FUTURE
        </h4>
        <p className="text-lg mb-2">
          We are the world&apos;s leading youth-serving nonprofit advancing STEM
          education. Founded in 1989 by inventor Dean Kamen, FIRST® prepares
          young people for the future through robotics programs.
        </p>
        <Link
      to="/about" // This is the route path
      className="bg-blue-500 text-white py-2 px-4 rounded-lg hover:bg-blue-600 transition"
    >
      About FIRST
    </Link>
      </div>
    </div>
  );
};

export default Hero;
