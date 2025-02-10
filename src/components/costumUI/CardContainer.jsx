import PropTypes from 'prop-types';

const CardContainer = ({ title, content, children }) => {
  return (
    <div className="p-10 bg-gray-100">
      <h3 className="text-3xl font-bold text-center text-gray-900 mb-4">{title}</h3>
      <p className="text-lg text-center text-gray-600 mb-8">{content}</p>
      {children}
    </div>
  );
};

// Prop validation
CardContainer.propTypes = {
  title: PropTypes.string.isRequired,
  content: PropTypes.string.isRequired,
  children: PropTypes.node, // Allows any renderable content (string, JSX, etc.)
};

export default CardContainer;
