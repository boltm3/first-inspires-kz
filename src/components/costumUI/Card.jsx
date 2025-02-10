import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

const FirstCard = ({ title, description, link, buttonText }) => {
  // Scroll to the top function with smooth animation
  const handleClick = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth', // Smooth scroll behavior
    });
  };

  return (
    <div className="bg-white p-6 rounded-lg shadow-lg flex flex-col">
      <h5 className="text-xl font-bold text-gray-900 mb-2">{title}</h5>
      <p className="text-gray-600 mb-2 flex-grow">{description}</p>
      <Link to={link} className="block mt-auto" onClick={handleClick}>
        <button className="bg-blue-500 text-white py-2 px-4 w-full rounded-lg">
          {buttonText}
        </button>
      </Link>
    </div>
  );
};

// Prop validation
FirstCard.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  link: PropTypes.string.isRequired,
  buttonText: PropTypes.string.isRequired,
};

export default FirstCard;
