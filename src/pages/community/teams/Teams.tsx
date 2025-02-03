import React, { useEffect, useState } from 'react';
import TeamsCard from './TeamsCard'; // 确保正确的导入路径
import { fetchJsonData } from '@/api/fetchJson'; // 导入 fetchJsonData 函数

// 定义团队数据的类型
interface Team {
  teamNumber: number;
  nickname: string;
  organization: string;
  location: string;
  rookieYear: number;
  email: string;
  instagram: string;
  youtube?: string;
  tiktok?: string;
  telegram?: string;
}

const Teams: React.FC = () => {
  // 使用明确的类型替代 any[]
  const [teams, setTeams] = useState<Team[]>([]); // 存储团队数据的状态
  const [loading, setLoading] = useState<boolean>(true); // 控制加载状态
  const [error, setError] = useState<string | null>(null); // 错误信息

  useEffect(() => {
    // 调用 fetchJsonData 获取数据
    const getTeamsData = async () => {
      try {
        // 假设需要的 JSON 数据是 teams_archive_list
        const data = await fetchJsonData('teams_archive_list'); 

        // 如果成功获取到数据，则更新状态
        setTeams(data);
      } catch (error) {
        // 如果请求失败，则设置错误信息
        setError('Failed to fetch teams data.');
      } finally {
        // 无论请求成功或失败，都将加载状态设置为 false
        setLoading(false);
      }
    };

    getTeamsData(); // 执行获取数据
  }, []); // 空依赖数组确保只在组件挂载时执行一次

  if (loading) {
    return <div>Loading...</div>; // 如果数据还在加载，显示加载中
  }

  if (error) {
    return <div>{error}</div>; // 如果发生错误，显示错误信息
  }

  return (
    <div>
      {/* 将获取到的团队数据传递给 TeamsCard 组件进行渲染 */}
      <TeamsCard teams={teams} />
    </div>
  );
};

export default Teams;
