import Comment from "./Comment"; // Import the Comment component
import getComment from "../../Api/getComment"; // Import the custom hook for fetching comments

const style = {
  wrapper: "bg-[#1A1A1A] p-4 rounded",
};

interface CommentsProps {
  question_id: number;
}

const Comments = ({ question_id }: CommentsProps) => {
  const { comments, loading, error } = getComment(question_id); // Get comments for the question

  if (loading) return <div>Loading...</div>; // Show loading state if comments are loading
  if (error) return <div>Error: {error}</div>; // Show error message if there's an error

  return (
    <div>
      <h1>Comments</h1>
      <div className={style.wrapper}>
        {comments?.map((comment) => (
          <Comment
            key={comment.comment_id}
            comment={comment} // Pass only the comment data
          />
        ))}
      </div>
    </div>
  );
};

export default Comments;
