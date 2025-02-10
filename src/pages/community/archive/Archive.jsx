import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import IconSearch from "../../../components/costumUI/IconSearch";
import TeamArchiveInfo from "./TeamArchiveInfo";

const Archive = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [teams, setTeams] = useState([]);
  const [loading, setLoading] = useState(true);

  // 读取外部 JSON 数据
  useEffect(() => {
    fetch("/archive-info.json") // ✅ 确保 JSON 放在 public 目录下
      .then((response) => response.json())
      .then((data) => {
        setTeams(data);
        setLoading(false);
      })
      .catch((error) => {
        console.error("Failed to load team data:", error);
        setLoading(false);
      });
  }, []);

  // 处理搜索
  const handleSearchChange = (event) => {
    setSearchQuery(event.target.value);
  };

  const filteredTeams = teams.filter(
    (team) =>
      team.teamName.toLowerCase().includes(searchQuery.toLowerCase()) ||
      team.teamNumber.toString().includes(searchQuery)
  );

  return (
    <div className="p-8">
      {/* Header Section */}
      <div className="text-center mb-8">
        <h2 className="text-3xl font-bold mb-4">Командалар мұрағаты</h2>
        <p className="text-gray-600 text-lg">
          Мұрағатталған командалар мен олардың үлестерін қараңыз.
        </p>
      </div>

      {/* Search Bar */}
      <div className="flex justify-center mb-8">
        <div className="relative w-full max-w-lg">
          <input
            type="text"
            placeholder="Search by team name or number"
            value={searchQuery}
            onChange={handleSearchChange}
            className="w-full p-4 pl-12 border rounded-full shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <IconSearch className="absolute top-1/2 left-4 transform -translate-y-1/2 text-gray-500" />
        </div>
      </div>

      {/* Loading State */}
      {loading && (
        <div className="text-center text-gray-500 mt-8">
          <p>Loading teams...</p>
        </div>
      )}

      {/* Teams List */}
      {!loading && (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {filteredTeams.map((team, index) => (
            <Link
              to={`./${team.teamNumber}`}
              key={index}
              className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow"
            >
              <div className="p-6 text-center">
                <TeamArchiveInfo {...team} />
              </div>
            </Link>
          ))}
        </div>
      )}

      {/* No Results Message */}
      {!loading && filteredTeams.length === 0 && (
        <div className="text-center text-gray-500 mt-8">
          <p>No archived teams found matching your search.</p>
        </div>
      )}
    </div>
  );
};

export default Archive;
