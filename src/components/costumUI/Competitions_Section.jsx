// src/components/costumUI/Section.jsx
import PropTypes from 'prop-types';

const Section = ({ title, description, overviewDescription, imageSrc, imageAlt, buttonText, buttonLink }) => {
  return (
    <div className="max-w-4xl mx-auto px-4 py-8">
      {/* Title and Head Description */}
      <div className="text-center mb-8">
        <h3 className="text-3xl font-semibold mb-2">{title}</h3>
        <p className="text-lg text-gray-600">{description}</p>
      </div>

      {/* Image */}
      {imageSrc && (
        <div className="mb-8">
          <img
            src={imageSrc}
            alt={imageAlt}
            className="w-full rounded-lg mx-auto"
          />
        </div>
      )}

      {/* Overview Section */}
      <div className="bg-white rounded-lg shadow-md p-6">
        <h5 className="text-2xl font-semibold mb-4">Overview</h5>
        <p className="text-lg">{overviewDescription}</p>
      </div>

      {/* Learn More Button */}
      {buttonText && buttonLink && (
        <div className="mt-8 text-center">
          <a
            href={buttonLink}
            className="inline-block bg-blue-600 text-white text-center py-3 px-6 rounded-lg hover:bg-blue-700"
          >
            {buttonText}
          </a>
        </div>
      )}
    </div>
  );
};

Section.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.node.isRequired, // Description for the head
  overviewDescription: PropTypes.node.isRequired, // Description for the overview
  imageSrc: PropTypes.string,
  imageAlt: PropTypes.string,
  buttonText: PropTypes.string,
  buttonLink: PropTypes.string,
};

export default Section;
