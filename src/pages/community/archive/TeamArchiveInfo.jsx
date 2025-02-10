import PropTypes from "prop-types";

const TeamArchiveInfo = ({
  teamName,
  teamNumber,
  yearsContributed,
  yearRange,
  archiveItems = [], // ✅ 这里使用默认参数代替 defaultProps
}) => {
  return (
    <div>
      <h3 className="text-xl font-bold mb-2 text-gray-900">
        {teamName} - {teamNumber}
      </h3>
      <p className="text-gray-600 mb-3">
        {yearsContributed} жыл үлес қосты ({yearRange})
      </p>
      <div className="flex justify-center flex-wrap mb-4">
        {archiveItems.map((item, idx) => (
          <span key={idx} className="text-gray-700 mb-1 mr-4">{item}</span>
        ))}
      </div>
    </div>
  );
};

// ✅ 仍然可以保留 PropTypes 进行类型检查
TeamArchiveInfo.propTypes = {
  teamName: PropTypes.string.isRequired,
  teamNumber: PropTypes.number.isRequired,
  yearsContributed: PropTypes.number.isRequired,
  yearRange: PropTypes.string.isRequired,
  archiveItems: PropTypes.arrayOf(PropTypes.string), // 这里不需要 `isRequired`，因为有默认值
};

export default TeamArchiveInfo;
