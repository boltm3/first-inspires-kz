import { useState, useEffect } from "react";
import VideoComments from "./Comment";
import { VideoInfo, Comment } from "./types";
import VideoDirectory from "./VideoDirectory"; // Import the VideoDirectory component

const videoData = [
  {
    category: "Basics",
    videos: [
      {
        title: "Introduction to FTC",
        url: "https://www.youtube.com/watch?v=M7lc1UVf-VE",
      },
      {
        title: "FTC Rules Overview",
        url: "https://www.youtube.com/watch?v=CkFYV9S0YDo",
      },
    ],
  },
  {
    category: "Advanced",
    videos: [
      {
        title: "Building a Robot",
        url: "https://www.youtube.com/watch?v=CkFYV9S0YDo",
      },
      {
        title: "Programming Tips",
        url: "https://www.youtube.com/watch?v=CkFYV9S0YDo",
      },
    ],
  },
];

const VideosPage = () => {
  const [currentVideo, setCurrentVideo] = useState(videoData[0].videos[0].url);
  const [videoInfo, setVideoInfo] = useState<VideoInfo | null>(null);
  const [comments, setComments] = useState<Comment[]>([]);
  const [error, setError] = useState<string | null>(null);

  const API_KEY = "AIzaSyA_CUT1v4K3BqufZWONxY6k4Un56CVyPz4";

  // Extract videoId from URL (e.g., "watch?v=CkFYV9S0YDo" -> "CkFYV9S0YDo")
  const getVideoId = (url: string) => {
    const match = url.match(/[?&]v=([a-zA-Z0-9_-]+)/);
    return match ? match[1] : null;
  };

  useEffect(() => {
    //console.log("Fetching video data for", currentVideo); // Log current video before fetching
    fetchVideoData(); // Fetch video data when currentVideo changes
  }, [currentVideo]); // Trigger fetchVideoData when currentVideo changes

  const fetchVideoData = async () => {
    const videoId = getVideoId(currentVideo);
    //console.log("Current Video ID:", videoId); // Log video ID for debugging

    if (!videoId) {
      setError("Invalid video URL.");
      return;
    }

    try {
      const videoRes = await fetch(
        `https://www.googleapis.com/youtube/v3/videos?part=snippet&id=${videoId}&key=${API_KEY}`
      );

      const videoData = await videoRes.json();
      //console.log("Fetched Video Data:", videoData); // Log full video data

      if (videoData.error) {
        setError(videoData.error.message || "Error fetching video data.");
        return;
      }

      // Update video info
      setVideoInfo(videoData.items?.[0]?.snippet || null);
      //console.log("Updated Video Info:", videoData.items?.[0]?.snippet); // Log the updated info
    } catch {
      setError("Failed to fetch video data.");
    }
  };

  useEffect(() => {
    //console.log("Fetching comments for", currentVideo); // Log current video before fetching comments
    fetchComments(); // Fetch comments when currentVideo changes
  }, [currentVideo]); // Trigger fetchComments when currentVideo changes

  const fetchComments = async () => {
    const videoId = getVideoId(currentVideo);
    console.log("Current Video ID for Comments:", videoId); // Log video ID for debugging

    if (!videoId) {
      setError("Invalid video URL.");
      return;
    }

    try {
      const commentsRes = await fetch(
        `https://www.googleapis.com/youtube/v3/commentThreads?part=snippet&videoId=${videoId}&key=${API_KEY}`
      );

      // Check if the response status is 403 (Forbidden)
      
      if (commentsRes.status === 403) {
        setError("Comments are disabled for this video.");
        return;
      }
        

      const commentsData = await commentsRes.json();
      console.log("Fetched Comments Data:", commentsData); // Log comments data

      // Check for errors in the response
      if (commentsData.error) {
        setError(commentsData.error.message || "Error fetching comments.");
        return;
      }

      // Update comments
      if (commentsData.items?.length === 0) {
        setError("No comments available.");
      }
      setComments(commentsData.items || []);
    } catch (error) {
      setError("Failed to fetch comments.");
      console.error(error); // Log the actual error for debugging
    }
  };

  const handleDescription = (description: string) =>
    description.split("\n").map((line, index) => (
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
          <iframe
            width="100%"
            height="100%"
            src={`https://www.youtube.com/embed/${getVideoId(currentVideo)}`}
            title="FTC Learning Video"
            allowFullScreen
          ></iframe>
        </div>

        {/* Video Directory Section */}
        <div
          className="w-full md:w-1/3 bg-gray-100 p-6 rounded-lg shadow-md overflow-y-auto"
          style={{ maxHeight: "500px", overflowX: "hidden" }}
        >
          <VideoDirectory
            videoData={videoData}
            setCurrentVideo={setCurrentVideo}
          />
        </div>
      </div>

      {/* Video Info Section */}
      {videoInfo && (
        <div className="w-full mb-8">
          {/* Description Section */}
          <div>
            <p className="text-gray-700">
              {handleDescription(videoInfo.description)}
            </p>
          </div>
        </div>
      )}

      {/* Comments Section */}
      {error===null ? (
        <VideoComments comments={comments} />
      ) : (
        <p className="text-gray-700">{error}</p>
      )}
    </div>
  );
};

export default VideosPage;
