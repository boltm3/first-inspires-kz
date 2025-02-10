import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const TeamDetails = () => {
  // 从 URL 参数中获取 teamNumber
  const { teamNumber } = useParams();

  // 定义状态变量：
  // teamData: 存储团队的历史数据
  // loading: 指示数据是否正在加载
  // error: 处理数据加载错误
  const [teamData, setTeamData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // 使用 useEffect 在组件加载时获取数据
  useEffect(() => {
    if (teamNumber) {
      const fetchTeamData = async () => {
        try {
          // 发送请求获取指定团队的 JSON 数据
          const response = await fetch(`/${teamNumber}.json`);
          if (!response.ok) throw new Error("Failed to fetch team data");

          // 解析 JSON 数据并更新状态
          const data = await response.json();
          setTeamData(data);
        } catch (err) {
          // 处理请求错误
          setError(err.message);
        } finally {
          // 无论成功或失败，结束加载状态
          setLoading(false);
        }
      };

      fetchTeamData();
    }
  }, [teamNumber]); // 依赖 teamNumber，确保数据更新

  return (
    <div className="p-8 bg-gray-100 min-h-screen">
      {/* 页面标题和介绍信息 */}
      <div className="text-center mb-8">
        <h2 className="text-3xl font-bold text-gray-800 mb-2">
          Команда {teamNumber} мұрағаты
        </h2>
        <p className="text-gray-600">
          Өткен жылдардағы жобалар, CAD модельдері, нұсқаулықтар және кодтармен танысыңыз.
        </p>
      </div>

      {/* 加载状态 */}
      {loading ? (
        <p className="text-center text-gray-500">Loading...</p>
      ) : error ? (
        // 错误提示
        <p className="text-center text-red-500">Error: {error}</p>
      ) : teamData.length > 0 ? (
        // 如果有数据，则显示团队的存档信息
        <div className="space-y-8">
          {teamData.map((yearData) => (
            <div key={yearData.year} className="bg-white p-6 rounded-lg shadow-md">
              {/* 显示年份 */}
              <h3 className="text-2xl font-bold text-blue-600 mb-4">{yearData.year}</h3>

              {/* 定义存档的不同类别，例如代码、CAD 模型等 */}
              {[
                { key: "codes", label: "Кодтар" },
                { key: "cad", label: "CAD модельдері" },
                { key: "guideBook", label: "Нұсқаулықтар" },
                { key: "portfolio", label: "Портфолио" },
                { key: "project", label: "Жобалар" },
                { key: "website", label: "Веб-сайттар" },
              ].map(({ key, label }) => (
                yearData[key]?.length > 0 && ( // 如果该类别有数据才显示
                  <div key={key} className="mb-4">
                    <h4 className="text-xl font-semibold text-gray-800 mb-2">{label}</h4>
                    <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                      {yearData[key].map((item, idx) => (
                        <li key={idx} className="bg-gray-50 p-4 rounded-lg shadow">
                          {/* 资源链接 */}
                          <a href={item.url} target="_blank" rel="noopener noreferrer" className="block text-blue-600 font-medium hover:underline">
                            {item.title || "View Item"}
                          </a>
                          {/* 预览图片（如果有） */}
                          {item.preview_image && (
                            <img src={item.preview_image} alt={item.title} className="mt-2 w-full h-32 object-cover rounded-lg" />
                          )}
                          {/* 描述信息（如果有） */}
                          <p className="text-gray-700 text-sm mt-2">{item.description}</p>
                        </li>
                      ))}
                    </ul>
                  </div>
                )
              ))}
            </div>
          ))}
        </div>
      ) : (
        // 当数据为空时显示的信息
        <p className="text-center text-gray-500">No archive data available for this team.</p>
      )}
    </div>
  );
};

export default TeamDetails;
