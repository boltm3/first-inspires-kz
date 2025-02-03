import TeamInfo from '../components/team/Team';
import { Team } from '../Api/types';

const team: Team = {
  team_id: 1,
  team_name: 'Bolt.m3',
  team_number: 22801,
  team_type: 'FTC',
  team_email: 'bolt.m3kz@gmail.com',
  last_login: '2025-01-15T10:00:00Z',
  team_description: 'Competitive robotics team, part of FTC in Kazakhstan.',
};

const MyTeam = () => {
  return (
    <div>
      <TeamInfo team={team} />
    </div>
  );
};

export default MyTeam;

