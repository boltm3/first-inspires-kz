import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";

const ManualBookDetail = () => {
  const { season } = useParams(); // 获取 URL 中的赛季参数
  const [manualBooks, setManualBooks] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // 从外部 JSON 读取数据
    fetch("/manualBooks.json") // 确保 JSON 在 public 目录下
      .then((response) => response.json())
      .then((data) => {
        setManualBooks(data);
        setLoading(false);
      })
      .catch((error) => {
        console.error("Error loading manuals:", error);
        setLoading(false);
      });
  }, []);

  // 找到匹配当前 season 的手册
  const selectedManual = manualBooks.find((book) => book.season === season);

  if (loading) {
    return <p className="text-center text-gray-500">Loading manuals...</p>;
  }

  return (
    <div className="p-8">
      {selectedManual ? (
        <div className="mt-8 bg-white p-6 rounded-lg shadow-md">
          <h2 className="text-3xl font-bold text-gray-800">
            {selectedManual.title}
          </h2>
          <p className="text-gray-600 mb-4">{selectedManual.description}</p>
          <h4 className="text-xl font-semibold text-gray-800">
            Manual Details
          </h4>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
  {selectedManual.manuals.map((manual, index) => (
    <a
      key={index}
      href={manual.download_link}
      target="_blank"
      rel="noopener noreferrer"
      className="block"
    >
      <div className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow w-full h-[300px]">
        <img
          src={manual.preview_picture}
          alt={manual.title}
          className="w-full h-48 object-cover"
        />
        <div className="p-4">
          <h5 className="text-lg font-semibold text-gray-800">{manual.title}</h5>
          <p className="text-gray-600 line-clamp-2 overflow-hidden">
            {manual.description}
          </p>
        </div>
      </div>
    </a>
  ))}
</div>

        </div>
      ) : (
        <p className="text-center text-gray-500">
          Manual not found for the selected season.
        </p>
      )}
    </div>
  );
};

export default ManualBookDetail;
