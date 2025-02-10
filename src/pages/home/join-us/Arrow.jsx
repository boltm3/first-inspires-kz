import PropTypes from "prop-types";

const Arrow = ({ className }) => (
  <svg
    width="427"
    height="495"
    viewBox="0 0 427 495"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={className}
  >
    <path
      d="M-50 12.2734C251.5 -19.2265 105.5 287.773 423.5 243.773M423.5 243.773L410 260.273M423.5 243.773L410 231.773"
      stroke="#484848"
      strokeWidth="4"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

// Prop validation
Arrow.propTypes = {
  className: PropTypes.string,
};

export default Arrow;
