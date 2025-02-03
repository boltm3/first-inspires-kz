import { useParams } from 'react-router-dom';
import Header from '../components/header/Header';
import Banner from '../components/community/Banner';
import CreatePost from '../components/feed/CreatePost';
import About from '../components/community/About';
import Feed from '../components/feed/Feed';
import getQuestions from '../Api/getQuestions';
import getCommunityById from '../Api/getCommunityById';

const style = {
  wrapper: `flex min-ha-screen flex-col bg-black text-white`,
  main: `mx-auto flex w-full max-w-5xl flex-1 space-x-6 py-5 px-6`,
  content: `w-full space-y-4 lg:w-2/3`,
  infoContainer: `hidden w-1/3 lg:block`,
};

const ForumHome: React.FC = () => {
  const { id } = useParams();

  // Call all hooks unconditionally at the top
  const { community, error: communityError } = getCommunityById(Number(id)); // Use id dynamically
  const { questions, error: questionsError } = getQuestions();


   /*
  // Render loading and error states unconditionally
  if (communityLoading || questionsLoading) {
    return <p>Loading...</p>;
  }

  */

  if (communityError) {
    return <p>Error: {communityError}</p>;
  }

  if (questionsError) {
    return <p>Error: {questionsError}</p>;
  }

  return (
    <div className={style.wrapper}>
      <Header />
      <Banner
        title={community?.title || 'Loading...'}
        name={community?.name || 'Loading...'}
        isJoin={true} // Adjust logic if necessary
      />
      <main className={style.main}>
        <div className={style.content}>
          <CreatePost />
          <Feed posts={questions || []} />
        </div>
        <div className={style.infoContainer}>
          <About
            title={community?.title || 'Loading...'}
            aboutText={community?.about || 'Loading...'}
            createdAt={community?.created_at || 'Loading...'}
            isJoined={true} // Adjust logic if necessary
          />
        </div>
      </main>
    </div>
  );
};

export default ForumHome;
