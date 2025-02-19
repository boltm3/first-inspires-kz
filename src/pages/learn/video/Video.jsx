import { useState, useEffect } from "react";
import VideoComments from "./Comment";
import VideoDirectory from "./VideoDirectory"; // Import the VideoDirectory component

const VideosPage = () => {
  const [videoData, setVideoData] = useState([]);
  const [currentVideo, setCurrentVideo] = useState(null);
  const [videoInfo, setVideoInfo] = useState(null);
  const [comments, setComments] = useState([]);
  const [error, setError] = useState(null);

  //i do not care about this shxxxt
  const MIKIMOUSEKEY = "AIzaSyA_CUT1v4K3BqufZWONxY6k4Un56CVyPz4";
  
  // Extract videoId from URL (e.g., "watch?v=CkFYV9S0YDo" -> "CkFYV9S0YDo")
  const getVideoId = (url) => {
    const match = url.match(/[?&]v=([a-zA-Z0-9_-]+)/);
    return match ? match[1] : null;
  };

  // Fetch video data from JSON
  useEffect(() => {
    fetch("/videos.json")
      .then((res) => res.json())
      .then((data) => {
        setVideoData(data);
        if (data.length > 0 && data[0].videos.length > 0) {
          setCurrentVideo(data[0].videos[0].url);
        }
      })
      .catch((err) => {
        console.error("Failed to load video data:", err);
        setError("Failed to load video list.");
      });
  }, []);

  // Fetch video info when currentVideo changes
  useEffect(() => {
    if (!currentVideo) return;

    const fetchVideoData = async () => {
      const videoId = getVideoId(currentVideo);
      if (!videoId) {
        setError("Invalid video URL.");
        return;
      }

      try {
        const videoRes = await fetch(
          `https://www.googleapis.com/youtube/v3/videos?part=snippet&id=${videoId}&key=${MIKIMOUSEKEY}`
        );

        const videoData = await videoRes.json();
        if (videoData.error) {
          setError(videoData.error.message || "Error fetching video data.");
          return;
        }

        setVideoInfo(videoData.items?.[0]?.snippet || null);
      } catch {
        setError("Failed to fetch video data.");
      }
    };

    fetchVideoData();
  }, [currentVideo]);

  // Fetch comments when currentVideo changes
  useEffect(() => {
    if (!currentVideo) return;

    const fetchComments = async () => {
      const videoId = getVideoId(currentVideo);
      if (!videoId) {
        setError("Invalid video URL.");
        return;
      }

      try {
        const commentsRes = await fetch(
          `https://www.googleapis.com/youtube/v3/commentThreads?part=snippet&videoId=${videoId}&key=${MIKIMOUSEKEY}`
        );

        if (commentsRes.status === 403) {
          setError("Comments are disabled for this video.");
          return;
        }

        const commentsData = await commentsRes.json();
        if (commentsData.error) {
          setError(commentsData.error.message || "Error fetching comments.");
          return;
        }

        if (commentsData.items?.length === 0) {
          setError("No comments available.");
        }
        setComments(commentsData.items || []);
      } catch (error) {
        setError("Failed to fetch comments.");
        console.error(error);
      }
    };

    fetchComments();
  }, [currentVideo]);

  // Function to handle line breaks in descriptions
  const handleDescription = (description) =>
    description?.split("\n").map((line, index) => (
      <span key={index}>
        {line}
        <br />
      </span>
    ));

  return (
    <div className="p-8" key={currentVideo}>
      {/* Video Title Section */}
      {videoInfo && (
        <div className="mb-4">
          <h3 className="text-xl font-bold text-blue-500">{videoInfo.title}</h3>
        </div>
      )}

      {/* Video Player and Directory Section */}
      <div className="flex flex-col md:flex-row items-center justify-center md:space-x-8">
        {/* Video Player Section */}
        <div className="w-full md:w-2/3 bg-black aspect-video rounded-lg overflow-hidden mb-8 md:mb-0">
          {currentVideo && (
            <iframe
              width="100%"
              height="100%"
              src={`https://www.youtube.com/embed/${getVideoId(currentVideo)}`}
              title="FTC Learning Video"
              allowFullScreen
            ></iframe>
          )}
        </div>

        {/* Video Directory Section */}
        <div
          className="w-full md:w-1/3 bg-gray-100 p-6 rounded-lg shadow-md overflow-y-auto"
          style={{ maxHeight: "500px", overflowX: "hidden" }}
        >
          <VideoDirectory videoData={videoData} setCurrentVideo={setCurrentVideo} />
        </div>
      </div>

      {/* Video Info Section */}
      {videoInfo && (
        <div className="w-full mb-8">
          {/* Description Section */}
          <div>
            <p className="text-gray-700">{handleDescription(videoInfo.description)}</p>
          </div>
        </div>
      )}

      {/* Comments Section */}
      {error === null ? <VideoComments comments={comments} /> : <p className="text-gray-700">{error}</p>}
    </div>
  );
};

export default VideosPage;
