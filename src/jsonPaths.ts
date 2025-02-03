// jsonPaths.ts

/*
import { fetchJsonData } from './api';

// 获取 'teams-archive-list.json' 文件的数据
const loadTeamArchiveList = async () => {
  const data = await fetchJsonData('teams_archive_list');
  console.log(data);  // 输出文件内容（JSON 数据）
};

// 获取 'archive' 文件夹下的某个具体文件的数据
const loadSpecificTeamData = async () => {
  const teamData = await fetchJsonData('teams_archive_base', 'team1');
  console.log(teamData);  // 输出特定团队的数据
};
*/
export const JSON_PATHS = {
    teams_archive_list: '/json/team/ftc/teams-archive-list.json',
    teams_archive_base: '/json/team/ftc/archive',
    teams_list:'/json/team/ftc/teams_list.json',
    manual_book:'/json/team/ftc/teams_list.json',
    guide_book:'/json/team/ftc/teams_list.json',
    parts_supplier:'/json/team/ftc/teams_list.json',
    video_list:'/json/team/ftc/teams_list.json',
    custom_evets:'/json/team/ftc/teams_list.json',
    // 可以继续添加更多文件路径
  };


  