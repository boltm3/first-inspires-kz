import { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import ContactLinks from "./Contact";
import TeamInfo from "./TeamInfo";
const TeamsCard = () => {
  const [teams, setTeams] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");

  useEffect(() => {
    fetch("/teams.json") // 读取 public/teams.json
      .then((response) => response.json())
      .then((data) => setTeams(data))
      .catch((error) => console.error("Error loading teams:", error));
  }, []);

  const handleSearchChange = (event) => {
    setSearchQuery(event.target.value);
  };

  const filteredTeams = teams.filter(
    (team) =>
      team.nickname.toLowerCase().includes(searchQuery.toLowerCase()) ||
      team.teamNumber.toString().includes(searchQuery)
  );

  return (
    <div className="p-8">
      <div className="text-center mb-8">
        <h2 className="text-3xl font-bold mb-4">Қазақстан FTC командалары</h2>
        <p className="text-gray-600 text-lg">
          FIRST Tech Challenge Қазақстан командаларын зерттеп, байланыс
          орнатыңыз.
        </p>
      </div>

      <div className="flex justify-center mb-8">
        <div className="relative w-full max-w-lg">
          <input
            type="text"
            placeholder="Команда нөмірі немесе лақап аты бойынша іздеу"
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

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {filteredTeams.map((team) => (
          <a
          key={team.teamNumber}
          href={`https://ftcscout.org/teams/${team.teamNumber}`}
          target="_blank"
          rel="noopener noreferrer"
          className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow cursor-pointer block"
        >
        
            <div className="p-6 text-center">
              <TeamInfo
                nickname={team.nickname}
                teamNumber={team.teamNumber}
                organization={team.organization}
                location={team.location}
                rookieYear={team.rookieYear}
              />
              <ContactLinks
                email={team.email}
                instagram={team.instagram}
                youtube={team.youtube}
                tiktok={team.tiktok}
                telegram={team.telegram}
              />
            </div>
          </a>
        ))}
      </div>

      {filteredTeams.length === 0 && (
        <div className="text-center text-gray-500 mt-8">
          <p>No teams found matching your search.</p>
        </div>
      )}
    </div>
  );
};

export default TeamsCard;
