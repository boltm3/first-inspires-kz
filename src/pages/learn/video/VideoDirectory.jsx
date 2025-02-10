// src/components/VideoDirectory.jsx
import PropTypes from 'prop-types';

const VideoDirectory = ({ videoData, setCurrentVideo }) => {
  return (
    <div className="" style={{ maxHeight: '500px' }}>
      <h3 className="text-xl font-bold text-gray-800 mb-4">Video Directory</h3>
      <div>
        {videoData.map((category, index) => (
          <div key={index} className="mb-6">
            <h4 className="text-lg font-semibold text-gray-700 mb-2">{category.category}</h4>
            <ul className="space-y-2">
              {category.videos.map((video, vidIndex) => (
                <li key={vidIndex}>
                  <button
                    onClick={() => setCurrentVideo(video.url)}
                    className="text-blue-500 hover:text-blue-700 underline"
                  >
                    {video.title}
                  </button>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
};

VideoDirectory.propTypes = {
  videoData: PropTypes.arrayOf(
    PropTypes.shape({
      category: PropTypes.string.isRequired,
      videos: PropTypes.arrayOf(
        PropTypes.shape({
          title: PropTypes.string.isRequired,
          url: PropTypes.string.isRequired,
        })
      ).isRequired,
    })
  ).isRequired,
  setCurrentVideo: PropTypes.func.isRequired,
};

export default VideoDirectory;
