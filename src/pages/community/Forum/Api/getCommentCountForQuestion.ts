import { supabase } from '../services/supabaseClient'; // Assuming the Supabase client is set up

// Function to get the comment count for a specific question
const getCommentCountForQuestion = async (questionId: number) => {
  // Fetch comments for a specific question where comment_father_id is null (root-level comments)
  const { data, error } = await supabase
    .from('comment')  // 'comment' table containing comment data
    .select('comment_id')  // We only need the `comment_id` to count comments
    .eq('question_id', questionId)  // Filter by the question ID
    .is('comment_father_id', null);  // Ensure we are counting root-level comments (no parent comment)

  if (error) {
    throw error; // If there's an error, throw it
  }

  // Return the number of comments
  return data.length; // The number of root-level comments
};

export default getCommentCountForQuestion;
