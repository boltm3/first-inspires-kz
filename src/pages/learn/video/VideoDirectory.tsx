// src/components/VideoDirectory.tsx
import React from "react";

interface Video {
  title: string;
  url: string;
}

interface VideoCategory {
  category: string;
  videos: Video[];
}

interface VideoDirectoryProps {
  videoData: VideoCategory[];
  setCurrentVideo: (url: string) => void;
}

const VideoDirectory: React.FC<VideoDirectoryProps> = ({ videoData, setCurrentVideo }) => {
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

export default VideoDirectory;
