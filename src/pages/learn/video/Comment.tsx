// src/components/VideoComments.tsx
import { Comment } from "./types";

const VideoComments = ({ comments }: { comments: Comment[] }) => {
  const sortedComments = comments
    .map(comment => comment.snippet.topLevelComment.snippet)
    .sort((a, b) => b.likeCount - a.likeCount);

  return (
    <div className="w-full">
      <h3 className="text-lg font-bold mb-2 mt-4">Top Comments</h3>
      {sortedComments.length === 0 ? (
        <p className="text-gray-600">No comments available.</p>
      ) : (
        <ul>
          {sortedComments.map((comment, index) => (
            <li key={index} className="p-4 mb-4 border rounded-lg shadow-sm bg-gray-100">
              <p className="font-semibold">{comment.authorDisplayName}</p>
              <p className="text-gray-700 mt-1">{comment.textOriginal}</p>
              <p className="text-sm text-gray-500 mt-2">Likes: {comment.likeCount}</p>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default VideoComments;
