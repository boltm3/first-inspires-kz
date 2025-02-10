import PropTypes from 'prop-types';

const TeamInfo = ({ nickname, teamNumber, organization, location, rookieYear }) => {
  return (
    <div>
      <h3 className="text-xl font-bold mb-2 text-gray-900">{nickname}</h3>
      <p className="text-gray-600 mb-1">
        <strong>Команда нөмірі:</strong> {teamNumber}
      </p>
      <p className="text-gray-600 mb-1">
        <strong>Ұйым:</strong> {organization}
      </p>
      <p className="text-gray-600 mb-1">
        <strong>Орналасқан жері:</strong> {location}
      </p>
      <p className="text-gray-600 mb-4">
        <strong>Алғашқы жылы:</strong> {rookieYear}
      </p>
    </div>
  );
};

// ✅ Props 类型验证
TeamInfo.propTypes = {
  nickname: PropTypes.string.isRequired,
  teamNumber: PropTypes.number.isRequired,
  organization: PropTypes.string,
  location: PropTypes.string,
  rookieYear: PropTypes.number,
};

// ✅ 默认值（防止 undefined 报错）
TeamInfo.defaultProps = {
  organization: 'Белгісіз',
  location: 'Белгісіз',
  rookieYear: 0,
};

export default TeamInfo;
