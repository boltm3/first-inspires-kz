import PropTypes from 'prop-types';

const ContactCard = ({ icon, title, description, link, linkText }) => (
  <div className="text-center p-6 rounded-lg shadow-md hover:shadow-lg transition duration-300">
    <div className="mb-4 flex justify-center items-center w-16 h-16 bg-blue-100 rounded-full">
      {icon}
    </div>
    <h2 className="text-xl font-semibold mb-2">{title}</h2>
    <p className="text-gray-600 mb-4">{description}</p>
    {link ? (
      <a href={link} className="font-semibold text-blue-600 hover:underline">
        {linkText}
      </a>
    ) : (
      <p className="font-semibold text-blue-600">{linkText}</p>
    )}
  </div>
);

ContactCard.propTypes = {
  icon: PropTypes.node.isRequired,
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  link: PropTypes.string,
  linkText: PropTypes.string.isRequired,
};

export default ContactCard;
