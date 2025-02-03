import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { fetchJsonData } from '@/api/fetchJson'; // 假设api.ts和fetchJsonData函数已经实现

interface TeamDetail {
  year: number;
  designs: string[];
  documents: string[];
  websiteImages: string[];
  codes: string[];
}

const TeamDetails: React.FC = () => {
  const { teamNumber } = useParams<{ teamNumber: string }>();
  const [teamData, setTeamData] = useState<TeamDetail[]>([]);

  useEffect(() => {
    if (teamNumber) {
      // 使用 fetchJsonData 获取团队数据
      fetchJsonData('teams_archive_base', teamNumber) // 拼接路径来获取指定团队的档案数据
        .then(data => {
          //console.log(data);

          // 确保提取到的数据结构正确
          const teamArchiveData = data[teamNumber]; // 提取对应团队的归档数据

          if (teamArchiveData && Array.isArray(teamArchiveData)) {
            setTeamData(teamArchiveData); // 设置获取到的数据
          } else {
            setTeamData([]); // 如果没有数据或格式不正确，设置为空数组
          }
        })
        .catch(error => {
          console.error('Error fetching team data:', error);
          setTeamData([]); // 如果请求失败，设置为空数组
        });
    }
  }, [teamNumber]);

  return (
    <div className="p-8 bg-gray-100 min-h-screen">
      <div className="text-center mb-8">
        <h2 className="text-3xl font-bold text-gray-800 mb-2">
          Team {teamNumber} Archive
        </h2>
        <p className="text-gray-600">
          Explore past designs, documents, website images, and codes by year.
        </p>
      </div>

      <div className="space-y-8">
        {teamData?.length > 0 ? (
          teamData.map((yearData) => (
            <div key={yearData.year} className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-2xl font-bold text-blue-600 mb-4">
                {yearData.year}
              </h3>

              <div className="mb-4">
                <h4 className="text-xl font-semibold text-gray-800">Designs</h4>
                <ul className="list-disc list-inside text-gray-700">
                  {yearData.designs.map((design, idx) => (
                    <li key={idx}>{design}</li>
                  ))}
                </ul>
              </div>

              <div className="mb-4">
                <h4 className="text-xl font-semibold text-gray-800">Documents</h4>
                <ul className="list-disc list-inside text-gray-700">
                  {yearData.documents.map((doc, idx) => (
                    <li key={idx}>{doc}</li>
                  ))}
                </ul>
              </div>

              <div className="mb-4">
                <h4 className="text-xl font-semibold text-gray-800">Website Images</h4>
                <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
                  {yearData.websiteImages.map((image, idx) => (
                    <img
                      key={idx}
                      src={image}
                      alt={`Website ${idx + 1}`}
                      className="w-full h-32 object-cover rounded-lg shadow-sm"
                    />
                  ))}
                </div>
              </div>

              <div>
                <h4 className="text-xl font-semibold text-gray-800">Codes</h4>
                <ul className="list-disc list-inside text-gray-700">
                  {yearData.codes.map((code, idx) => (
                    <li key={idx}>{code}</li>
                  ))}
                </ul>
              </div>
            </div>
          ))
        ) : (
          <div className="text-center text-gray-500">
            <p>No archive data available for this team.</p>
          </div>
        )}
      </div>

      {teamData?.length > 0 && (
        <div className="text-center text-gray-700 mt-8">
          <p className="font-medium">Archive Year Count: {teamData.length}</p>
        </div>
      )}
    </div>
  );
};

export default TeamDetails;
