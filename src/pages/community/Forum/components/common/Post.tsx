import React, { useEffect, useState } from 'react';
import Vote from '../feed/Vote';
import Actions from '../feed/Actions';
import Info from '../feed/Info';
import { Question } from '../../Api/types';
import getLikeCountForQuestion from '../../Api/getLikeForQuestion'; // Function to fetch like count
import getCommentCountForQuestion from '../../Api/getCommentCountForQuestion'; // Function to fetch comment count
import getTeamById from '../../Api/getTeamById'; // Function to fetch team info

const Post: React.FC<Question> = ({
  title,
  content,
  created_at,
  user_id,  // Assuming user_id is actually team_id
  question_id,
}) => {
  const [likeCount, setLikeCount] = useState<number | null>(null);
  const [likeError, setLikeError] = useState<string | null>(null);
  const [commentCount, setCommentCount] = useState<number | null>(null);
  const [commentError, setCommentError] = useState<string | null>(null);

  const { team, error } = getTeamById(user_id); // Fetch team info based on user_id (which is actually team_id)

  // Fetch like count when the component mounts or when question_id changes
  useEffect(() => {
    const fetchLikeCount = async () => {
      try {
        const count = await getLikeCountForQuestion(question_id);
        setLikeCount(count);
      } catch (err) {
        setLikeError('Failed to fetch like count');
        console.error('Like fetch error:', err);
      }
    };

    fetchLikeCount();
  }, [question_id]);

  // Fetch comment count when the component mounts or when question_id changes
  useEffect(() => {
    const fetchCommentCount = async () => {
      try {
        const count = await getCommentCountForQuestion(question_id);
        setCommentCount(count);
      } catch (err) {
        setCommentError('Failed to fetch comment count');
        console.error('Comment fetch error:', err);
      }
    };

    fetchCommentCount();
  }, [question_id]);

  // If there's an error, show the error message
  if (likeError || commentError) {
    return <p>{likeError || commentError}</p>;
  }

  /*
  if (loading) {
    return <p>Loading team information...</p>;
  }
    */

  if (error) {
    return <p>Error loading team data: {error}</p>;
  }

  return (
    <div className="flex space-x-3 rounded bg-[#1a1a1b]/80 p-2 border border-[#343536]">
      {/* Dynamically set the like count */}
      <Vote likes={likeCount ?? 0} />
      <div className="flex flex-col space-y-1 cursor-pointer">
        <Info author={team?.team_name || "Unknown Team"} date={created_at} subreddit="ftc" />
        <h1 className="text-lg font-medium text-[#D7DADC]">{title}</h1>
        <p className="text-sm font-light text-[#D7DADC]/80">{content}</p>
        <Actions comments={commentCount ?? 0} /> {/* Dynamically set the comment count */}
      </div>
    </div>
  );
};

export default Post;
