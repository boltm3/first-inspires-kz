import { supabase } from '../services/supabaseClient'; // Assuming the Supabase client is set up
// Assuming you have a `LikeData` type defined

// Function to get like count for a question
const getLikeCountForQuestion = async (questionId: number) => {
  // Fetch likes for a specific question where comment_id is not null
  const { data, error } = await supabase
    .from('like')  // 'like' table containing like/dislike data
    .select('is_like, comment_id')  // We are only interested in the `is_like` and `comment_id` columns
    .eq('question_id', questionId)  // Filter by the question ID
    .is('comment_id', null);  // Ensure we are getting likes for the question, not for any specific comment

  if (error) {
    throw error; // If there's an error, throw it
  }

  // Calculate the like count by counting the `is_like` values
  const likeCount = data.filter((item) => item.is_like).length;
  const dislikeCount = data.filter((item) => !item.is_like).length;

  // Return the difference between like and dislike counts
  //console.log(data)
  return likeCount - dislikeCount;
};

export default getLikeCountForQuestion;
