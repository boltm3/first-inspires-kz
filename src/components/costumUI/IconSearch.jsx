import PropTypes from 'prop-types'; // Import PropTypes for prop validation

const IconSearch = ({ className }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
      className={className}
      width="20"
      height="20"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
        d="M10 18l6-6m0 0l-6-6m6 6H4"
      />
    </svg>
  );
};

// Add PropTypes validation
IconSearch.propTypes = {
  className: PropTypes.string, // className is optional, as it's a string
};

export default IconSearch;
