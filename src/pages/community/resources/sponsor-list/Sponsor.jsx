import { useState, useEffect } from "react";
import SponsorCard from "./SponsorCard";
const SponsorsList = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [expandedSponsorIndex, setExpandedSponsorIndex] = useState(null);
  const [sponsors, setSponsors] = useState([]); // 从外部加载数据
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // 读取 JSON 数据
  useEffect(() => {
    fetch("/sponsors.json") // 从 public 目录加载
      .then((response) => {
        if (!response.ok) {
          throw new Error("Failed to load sponsors");
        }
        return response.json();
      })
      .then((data) => {
        setSponsors(data);
        setLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching sponsors:", error);
        setError(error.message);
        setLoading(false);
      });
  }, []);

  // 搜索过滤
  const filteredSponsors = sponsors.filter(
    (sponsor) =>
      sponsor.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      sponsor.description.toLowerCase().includes(searchQuery.toLowerCase())
  );

  // 切换赞助详情
  const toggleSponsorshipDetails = (index) => {
    setExpandedSponsorIndex(expandedSponsorIndex === index ? null : index);
  };

  if (loading) return <p className="text-gray-500">Loading sponsors...</p>;
  if (error) return <p className="text-red-500">Error: {error}</p>;

  return (
    <div className="p-8">
      <h2 className="text-2xl font-bold mb-6">Демеушілер тізімі</h2>

      {/* 搜索框 */}
      <input
        type="text"
        placeholder="Демеушілерді іздеу"
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
        className="p-2 mb-4 border border-gray-300 rounded-lg w-full"
      />

      <div className="space-y-6">
        {filteredSponsors.length > 0 ? (
          filteredSponsors.map((sponsor, index) => (
            <SponsorCard
              key={index}
              sponsor={sponsor}
              isExpanded={expandedSponsorIndex === index}
              onToggle={() => toggleSponsorshipDetails(index)}
            />
          ))
        ) : (
          <p className="text-gray-500">
            Сіздің іздеуіңізге сәйкес демеушілер табылмады.
          </p>
        )}
      </div>
    </div>
  );
};

export default SponsorsList;
