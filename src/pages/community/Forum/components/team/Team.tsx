import { UserIcon, MapIcon, ClockIcon, IdentificationIcon } from '@heroicons/react/24/outline';
import Header from '../header/Header';
import { Team } from '../../Api/types';

const style = {
  wrapper: 'flex min-h-screen flex-col bg-black text-white pt-20',
  main: 'mx-auto flex w-full max-w-5xl flex-1 space-x-6 py-5 px-6',
  content: 'w-full space-y-4 lg:w-2/3',
  container: 'bg-[#1a1a1b] p-6 rounded shadow-lg',  // Using the provided color
  aboutContent: 'py-2 text-sm',
  statsWrapper: 'flex items-center space-x-16 flex-wrap',
  stat: 'flex flex-col items-center',
  statTitle: 'text-xs text-gray-400',
  headerText: 'text-center text-lg font-semibold text-gray-300',
  title: 'text-2xl font-bold text-white',
  subtitle: 'text-lg font-semibold text-gray-400',
};


// 封装成 TeamInfo 组件
const TeamInfo = ({ team }: { team: Team }) => {
  return (
    <div className={style.wrapper}>
      <Header />
      <main className={style.main}>
        <div className={`${style.content} ${style.container}`}>
          <p className={style.headerText}>This is Your Team Info</p>
          <h1 className={style.title}>{team.team_name}</h1>
          <p className={style.subtitle}>{team.team_type}</p>
          <div className={style.aboutContent}>
            <h2 className="text-xl font-bold">About</h2>
            <div dangerouslySetInnerHTML={{ __html: team.team_description }} />
          </div>
          <div className={style.statsWrapper}>
            <div className={style.stat}>
              <UserIcon className="h-6 w-6 text-gray-400" />
              <p className="text-sm">{team.team_number}</p>
              <p className={style.statTitle}>Team Number</p>
            </div>
            <div className={style.stat}>
              <MapIcon className="h-6 w-6 text-gray-400" />
              <p className="text-sm">{team.team_email}</p>
              <p className={style.statTitle}>Email</p>
            </div>
            <div className={style.stat}>
              <ClockIcon className="h-6 w-6 text-gray-400" />
              <p className="text-sm">{new Date(team.last_login).toLocaleString()}</p>
              <p className={style.statTitle}>Last Login</p>
            </div>
            <div className={style.stat}>
              <IdentificationIcon className="h-6 w-6 text-gray-400" />
              <p className="text-sm">{team.team_id}</p>
              <p className={style.statTitle}>Team ID</p>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default TeamInfo;
