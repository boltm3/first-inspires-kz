import { useParams } from 'react-router-dom';
import Post from '../../components/common/Post';
import Header from '../../components/header/Header';
import Comments from '../../components/comment/Comments';
import SaveComment from '../../components/comment/SaveComment';
import getQuestionById from '../../Api/getQuestionById';

const style = {
  wrapper: 'flex min-h-screen flex-col bg-black text-white',
  container: 'mx-auto flex w-full max-w-5xl flex-1 space-x-6 py-[5rem] px-6',
  containerWrapper: 'w-full space-y-4 lg:w-2/3',
};

const PostView = (): JSX.Element => {
  const { id } = useParams();
  const { question, loading, error } = getQuestionById(Number(id));

  if (loading || error || !question) {
    return (
      <StateWrapper
        loading={loading}
        error={error}
        noQuestion={!question}
      />
    );
  }

  return (
    <div className={style.wrapper}>
      <Header />
      <div className={style.container}>
        <div className={style.containerWrapper}>
          <Post {...question} />
          <SaveComment question_id={Number(id)}/>
          <Comments question_id={Number(id)}/>
        </div>
      </div>
    </div>
  );
};

// Reusable StateWrapper to handle different states (loading, error, no question)
const StateWrapper = ({
  loading,
  error,
  noQuestion,
}: {
  loading: boolean;
  error: string | null;
  noQuestion: boolean;
}) => (
  <div className={style.wrapper}>
    <Header />
    <div className={style.container}>
      <div className={style.containerWrapper}>
        {loading && <div>Loading...</div>}
        {error && <div>Error: {error}</div>}
        {noQuestion && <div>No question found</div>}
      </div>
    </div>
  </div>
);

export default PostView;
