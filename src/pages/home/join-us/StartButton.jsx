import { Link } from 'react-router-dom';

export default function StartButton() {
  return (
    <Link to="/contact">
      <button className="px-6 py-0.5 bg-[#0066b3] text-white text-2xl font-semibold font-['Montserrat'] rounded-lg shadow-lg border-2 border-[#0066b3] flex justify-center items-center transform transition-transform duration-300 hover:scale-105">
      бастаңыз
      </button>
    </Link>
  );
}
