import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope, faSearch } from '@fortawesome/free-solid-svg-icons';
import { faInstagram, faYoutube, faTiktok, faTelegram } from '@fortawesome/free-brands-svg-icons';

interface Team {
  teamNumber: number;
  nickname: string;
  organization: string;
  location: string;
  rookieYear: number;
  email: string;
  instagram?: string;
  youtube?: string;
  tiktok?: string;
  telegram?: string;
}

const TeamsCard: React.FC<{ teams: Team[] }> = ({ teams }) => {
  const [searchQuery, setSearchQuery] = useState('');

  const handleSearchChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchQuery(event.target.value);
  };

  const filteredTeams = teams.filter(
    (team) =>
      team.nickname.toLowerCase().includes(searchQuery.toLowerCase()) ||
      team.teamNumber.toString().includes(searchQuery)
  );

  return (
    <div className="p-8">
      {/* Header Section */}
      <div className="text-center mb-8">
        <h2 className="text-3xl font-bold mb-4">Kazakhstan FTC Teams</h2>
        <p className="text-gray-600 text-lg">
          Discover and connect with FIRST Tech Challenge teams from Kazakhstan.
        </p>
      </div>

      {/* Search Bar */}
      <div className="flex justify-center mb-8">
        <div className="relative w-full max-w-lg">
          <input
            type="text"
            placeholder="Search by team number or nickname"
            value={searchQuery}
            onChange={handleSearchChange}
            className="w-full p-4 pl-12 border rounded-full shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <FontAwesomeIcon
            icon={faSearch}
            className="absolute top-1/2 left-4 transform -translate-y-1/2 text-gray-500"
          />
        </div>
      </div>

      {/* Teams List */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {filteredTeams.map((team) => (
          <a
            key={team.teamNumber}
            href={`https://ftcscout.org/teams/${team.teamNumber}`} // Add the link here
            target="_blank"
            rel="noopener noreferrer"
            className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow"
          >
            <div className="p-6 text-center">
              <h3 className="text-xl font-bold mb-2 text-gray-900">
                {team.nickname}
              </h3>
              <p className="text-gray-600 mb-1">
                <strong>Team Number:</strong> {team.teamNumber}
              </p>
              <p className="text-gray-600 mb-1">
                <strong>Organization:</strong> {team.organization}
              </p>
              <p className="text-gray-600 mb-1">
                <strong>Location:</strong> {team.location}
              </p>
              <p className="text-gray-600 mb-4">
                <strong>Rookie Year:</strong> {team.rookieYear}
              </p>
              <div className="flex justify-center space-x-4">
                {/* Email */}
                <a
                  href={`mailto:${team.email}`}
                  className="text-gray-600 hover:text-blue-600"
                >
                  <FontAwesomeIcon icon={faEnvelope} className="text-xl" />
                </a>
                {/* Optional Social Media Links */}
                {team.instagram && (
                  <a
                    href={`https://instagram.com/${team.instagram}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-600 hover:text-blue-600"
                  >
                    <FontAwesomeIcon icon={faInstagram} className="text-xl" />
                  </a>
                )}
                {team.youtube && (
                  <a
                    href={`https://youtube.com/${team.youtube}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-600 hover:text-blue-600"
                  >
                    <FontAwesomeIcon icon={faYoutube} className="text-xl" />
                  </a>
                )}
                {team.tiktok && (
                  <a
                    href={`https://tiktok.com/@${team.tiktok}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-600 hover:text-blue-600"
                  >
                    <FontAwesomeIcon icon={faTiktok} className="text-xl" />
                  </a>
                )}
                {team.telegram && (
                  <a
                    href={`https://t.me/${team.telegram}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-600 hover:text-blue-600"
                  >
                    <FontAwesomeIcon icon={faTelegram} className="text-xl" />
                  </a>
                )}
              </div>
            </div>
          </a>
        ))}
      </div>

      {/* No Results Message */}
      {filteredTeams.length === 0 && (
        <div className="text-center text-gray-500 mt-8">
          <p>No teams found matching your search.</p>
        </div>
      )}
    </div>
  );
};

export default TeamsCard;
