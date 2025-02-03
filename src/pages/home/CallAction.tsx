import { Link } from "react-router-dom";

const CallAction = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div className="p-4 flex flex-col items-center">
      <h4 className="text-4xl mb-4 text-center">Join Us!</h4>
      <p className="text-lg mb-4 text-center">
        Be a part of FIRST Kazakhstan. Start your journey today.
      </p>

      <Link
        to="/contact" // Replace with the actual route you want to navigate to
        className="bg-secondary-500 text-black py-2 px-4 rounded-lg hover:bg-secondary-600 transition"
        onClick={scrollToTop} // Scroll to the top when clicked
      >
        Get Started
      </Link>
    </div>
  );
};

export default CallAction;
