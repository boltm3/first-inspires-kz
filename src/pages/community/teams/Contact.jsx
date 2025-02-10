import PropTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { faInstagram, faYoutube, faTiktok, faTelegram } from '@fortawesome/free-brands-svg-icons';

const ContactLinks = ({ email, instagram, youtube, tiktok, telegram }) => {
  return (
    <div className="flex justify-center space-x-4">
      {email && (
        <a href={`mailto:${email}`} className="text-gray-600 hover:text-blue-600">
          <FontAwesomeIcon icon={faEnvelope} className="text-xl" />
        </a>
      )}
      {instagram && (
        <a href={`https://instagram.com/${instagram}`} target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-blue-600">
          <FontAwesomeIcon icon={faInstagram} className="text-xl" />
        </a>
      )}
      {youtube && (
        <a href={`https://youtube.com/${youtube}`} target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-blue-600">
          <FontAwesomeIcon icon={faYoutube} className="text-xl" />
        </a>
      )}
      {tiktok && (
        <a href={`https://tiktok.com/@${tiktok}`} target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-blue-600">
          <FontAwesomeIcon icon={faTiktok} className="text-xl" />
        </a>
      )}
      {telegram && (
        <a href={`https://t.me/${telegram}`} target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-blue-600">
          <FontAwesomeIcon icon={faTelegram} className="text-xl" />
        </a>
      )}
    </div>
  );
};

// ✅ 添加 prop-types 验证
ContactLinks.propTypes = {
  email: PropTypes.string,
  instagram: PropTypes.string,
  youtube: PropTypes.string,
  tiktok: PropTypes.string,
  telegram: PropTypes.string,
};

export default ContactLinks;
