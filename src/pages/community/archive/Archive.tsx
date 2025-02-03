import React, { useEffect, useState } from 'react';
import ArchiveCard from './ArchiveCard';
import { fetchJsonData } from '@/api/fetchJson'; // 引入 api.ts

interface Team {
  teamName: string;
  teamNumber: string;
  yearsContributed: number;
  yearRange: string;
  archiveItems: string[];
}

const Archive: React.FC = () => {
  const [teams, setTeams] = useState<Team[]>([]);

  useEffect(() => {
    // 加载 teams.json
    fetchJsonData('teams_archive_list')
      .then((data) => setTeams(data));
  }, []);

  return (
    <div>
      <ArchiveCard teams={teams} />
    </div>
  );
};

export default Archive;
