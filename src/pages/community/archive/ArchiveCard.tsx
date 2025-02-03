import React, { useState } from 'react';
import { Link } from 'react-router-dom'; // 引入 Link 组件
import IconSearch from '@/components/costumUI/IconSearch'; // 引入封装好的组件

interface Team {
  teamName: string;
  teamNumber: string;
  yearsContributed: number;
  yearRange: string;
  archiveItems: string[];
}

const ArchiveCard: React.FC<{ teams: Team[] }> = ({ teams }) => {
  const [searchQuery, setSearchQuery] = useState('');

  // 搜索功能
  const handleSearchChange = (event: React.ChangeEvent<HTMLInputElement>) => {
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
        <h2 className="text-3xl font-bold mb-4">Team Archive</h2>
        <p className="text-gray-600 text-lg">
          Browse through the archived teams and their contributions.
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

      {/* Teams List */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {filteredTeams.map((team, index) => (
          <Link
            to={`./${team.teamNumber}`} // 设置路径为 ./{teamNumber}
            key={index}
            className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow"
          >
            <div className="p-6 text-center">
              <h3 className="text-xl font-bold mb-2 text-gray-900">
                {team.teamName} - {team.teamNumber}
              </h3>
              <p className="text-gray-600 mb-3">
                Contributed for {team.yearsContributed} years ({team.yearRange})
              </p>
              <div className="flex justify-center flex-wrap mb-4">
                {/* Display archiveItems on a single line */}
                {team.archiveItems.map((item, idx) => (
                  <span key={idx} className="text-gray-700 mb-1 mr-4">
                    {item}
                  </span>
                ))}
              </div>
            </div>
          </Link>
        ))}
      </div>

      {/* No Results Message */}
      {filteredTeams.length === 0 && (
        <div className="text-center text-gray-500 mt-8">
          <p>No archived teams found matching your search.</p>
        </div>
      )}
    </div>
  );
};

export default ArchiveCard;
