import { useState } from 'react';
import { supabase } from '../../services/supabaseClient'; // Import the initialized supabase client

const style = {
  wrapper: "flex flex-col space-y-2 rounded bg-[#1a1a1b] p-4",
  input: 'rounded border border-[#343536] bg-[#1a1a1b] px-4 py-2 text-left text-sm text-white focus:outline-none h-24',
  commentBtn: 'rounded-full bg-gray-200 px-4 py-1.5 text-xs font-semibold text-[#1A1A1B]'
};

const SaveComment = ({ question_id }: { question_id: number }) => {
  const [comment, setComment] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  // Function to handle comment submission
  const handleCommentSubmit = async () => {
    if (!comment.trim()) return; // Prevent submitting an empty comment

    setLoading(true);
    setError(null);

    try {
      // Insert the comment into the Supabase database
      const { error } = await supabase
        .from('comment') // Access the 'comment' table
        .insert([
          {
            question_id, // Associating the comment with the question
            user_id: 1,  // Replace with the actual user_id
            content: comment, // The content of the comment
            comment_father_id: null, // Use the parent comment ID if it's a reply (optional)
          }
        ]);

      if (error) {
        throw error;
      }

      // Reset the comment field after successful submission
      setComment('');
    } catch (error: any) {
      setError(error.message); // Capture any errors during the insertion
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className={style.wrapper}>
      <div className="text-sm">
        Comment as <span className="text-[#4296CA]">arcbomi</span>
      </div>
      <textarea
        className={style.input}
        placeholder="What are your thoughts?"
        cols={10}
        rows={8}
        value={comment}
        onChange={(e) => setComment(e.target.value)} // Handle input changes
      />
      <div className="flex justify-end pt-2">
        <button
          className={style.commentBtn}
          onClick={handleCommentSubmit} // Trigger the comment submission
          disabled={loading}
        >
          {loading ? 'Submitting...' : 'Comment'}
        </button>
      </div>

      {error && <div className="text-red-500 text-xs mt-2">{error}</div>}
    </div>
  );
};

export default SaveComment;
