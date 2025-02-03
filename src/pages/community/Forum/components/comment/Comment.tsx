import { useEffect, useState } from "react";  // Import necessary hooks
import { ChatBubbleBottomCenterTextIcon } from "@heroicons/react/24/outline";
import { UpvoteIcon } from "../common/UpvoteIcon";
import { DownvoteIcon } from "../common/DownvoteIcon";
import { Comment as CommentType } from "../../Api/types";  // Import Comment interface
import getTeamById from "../../Api/getTeamById"; // Import getTeamById function

// Define the prop types for the Comment component
interface CommentProps {
  comment: CommentType;
}

const style = {
  postInfoContainer: "flex gap-[.4rem] mx-5 ",
  icon: "text-[#818384]",
  icons: "flex gap-[.4rem]",
  commentContainer: "my-[2rem] flex flex-col gap-[.4rem]",
  reply: "flex items-center gap-[.2rem] text-[#818384]",
};

const Comment = ({ comment }: CommentProps) => {
  const [teamName, setTeamName] = useState<string>("Unknown Team");
  const { team, loading, error } = getTeamById(comment.user_id); // Fetch team by user_id (assuming user_id matches team_id)

  useEffect(() => {
    if (team) {
      setTeamName(team.team_name); // Set the team name when team data is available
    }
  }, [team]);

  if (loading) return <div>Loading...</div>; // Show loading state if team is being fetched
  if (error) return <div>Error: {error}</div>; // Show error if fetching fails

  return (
    <div key={comment.comment_id} className={style.commentContainer}>
      <div className={style.postInfoContainer}>
        <span>{teamName}</span> {/* Display the team name */}
        <span>•</span>
        <span>{new Date(comment.created_at).toLocaleDateString()}</span> {/* Display the formatted comment creation date */}
      </div>
      <div>{comment.content}</div> {/* Display the comment content */}
      <div className={style.icons}>
        <span className={style.icon}>
          <UpvoteIcon /> {/* Upvote icon */}
        </span>
        <span>123</span> {/* Replace with actual upvote count */}
        <span className={style.icon}>
          <DownvoteIcon /> {/* Downvote icon */}
        </span>
        <span className={style.reply}>
          <ChatBubbleBottomCenterTextIcon className="h-6 w-6" /> {/* Reply icon */}
          <span>Reply</span>
        </span>
      </div>
    </div>
  );
};

export default Comment;
