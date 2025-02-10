import PropTypes from "prop-types";
import { Link } from "react-router-dom"; // 导入 Link 组件

const CompetitionCard = ({
  title = "FIRST",
  subtitle = "COMPETITION",
  subtitleColor = "#000000",
  description = "A robotics competition to challenge students.",
  imageUrl = "https://via.placeholder.com/357x279",
  buttonText = "Learn More",
  linkTo = "/about/competitions/fll", // 默认链接
}) => {
  return (
    <div className="w-full max-w-xs bg-white rounded-xl shadow-lg border-4 border-[#0066b3] overflow-hidden">
      {/* Image Section */}
      <img className="w-full h-64 object-cover" src={imageUrl} alt={title} />

      {/* Text Content */}
      <div className="flex flex-col p-6">
        <div className="flex-grow">
          <span className="text-black text-4xl font-extrabold font-['Shinn RR'] leading-tight">
            {title}
          </span>
          <span
            className={`text-2xl font-bold font-['Montserrat'] uppercase ml-2`}
            style={{ color: subtitleColor }}
          >
            {subtitle}
          </span>
        </div>
        <p className="mt-3 text-black text-base flex-grow">{description}</p>

        {/* Button (Link) */}
        <Link
          to={linkTo} // 让按钮跳转到指定链接
          className="mt-4 px-5 py-3 bg-white rounded-md shadow-md text-[#0066b3] font-semibold text-base self-end 
          transition-transform duration-300 transform hover:scale-105 text-center"
        >
          {buttonText}
        </Link>
      </div>
    </div>
  );
};

// **PropTypes Validation**
CompetitionCard.propTypes = {
  title: PropTypes.string,
  subtitle: PropTypes.string,
  subtitleColor: PropTypes.string,
  description: PropTypes.string,
  imageUrl: PropTypes.string,
  buttonText: PropTypes.string,
  linkTo: PropTypes.string, // 新增 linkTo 参数
};

export default CompetitionCard;
