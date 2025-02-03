import { supabase } from '../services/supabaseClient'; // Assuming the Supabase client is set up

// Function to get like count for a specific comment
const getLikeCountForComment = async (questionId: number, commentId: number) => {
  // Fetch likes for a specific comment under a specific question
  const { data, error } = await supabase
    .from('like') // 'like' table containing like/dislike data
    .select('is_like') // Only interested in the `is_like` column
    .eq('question_id', questionId) // Filter by the question ID
    .eq('comment_id', commentId); // Filter by the comment ID

  if (error) {
    throw error; // If there's an error, throw it
  }

  // Calculate the like count by counting the `is_like` values
  const likeCount = data.filter((item) => item.is_like).length; // Count the likes (true)
  const dislikeCount = data.filter((item) => !item.is_like).length; // Count the dislikes (false)

  // Return the difference between like and dislike counts
  return likeCount - dislikeCount;
};

export default getLikeCountForComment;
