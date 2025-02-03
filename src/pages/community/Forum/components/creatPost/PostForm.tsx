import { useState } from 'react';
import Loading from '../common/Loading';
import addQuestion from '../../Api/add/addQuestion'; // Import the addQuestion function

const style = {
  wrapper: "flex flex-col space-y-6",
  input:
    "bg-[#1a1a1b] border border-[#343536] px-4 py-2 text-left text-sm text-white focus:outline-none",
  title: "border-b border-[#343536] pb-3 text-lg font-medium",
  postBtn:
    "bg-gray-200 px-4 py-1.5 text-xs font-semibold text-[#1A1A1B] rounded-full",
  postBtnContainer: "flex justify-end pt-2",
};

const PostForm = () => {
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError(null);

    try {
      // Replace 123 with the actual user_id, depending on your authentication system
      const user_id = 123;
      await addQuestion(user_id, title, content);
      // Reset form after successful submission
      setTitle('');
      setContent('');
    } catch (err) {
      setError('Failed to post question. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className={style.wrapper}>
      {loading && <Loading />} {/* Show loading spinner while submitting */}
      <h1 className={style.title}>Create Question</h1>

      <form onSubmit={handleSubmit} className="flex flex-col space-y-2 rounded bg-[#1a1a1b] p-4">
        <input
          className={style.input}
          type="text"
          placeholder="Title"
          value={title}
          onChange={(e) => setTitle(e.target.value)} // Update title state on change
        />

        <textarea
          className={style.input}
          name="content"
          id="content"
          cols={30}
          rows={10}
          placeholder="Text (required)"
          value={content}
          onChange={(e) => setContent(e.target.value)} // Update content state on change
        />

        {error && <p className="text-red-500 text-sm">{error}</p>} {/* Display error message */}

        <div className={style.postBtnContainer}>
          <button type="submit" className={style.postBtn} disabled={loading}>
            Post
          </button>
        </div>
      </form>
    </div>
  );
};

export default PostForm;
