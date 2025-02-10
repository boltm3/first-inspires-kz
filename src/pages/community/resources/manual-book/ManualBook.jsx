import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const ManualBooks = () => {
  const [manualBooks, setManualBooks] = useState([]);

  useEffect(() => {
    // 通过 fetch 加载外部 JSON
    fetch("/manualBooks.json") // 确保正确路径
      .then((response) => response.json())
      .then((data) => setManualBooks(data))
      .catch((error) => console.error("Error loading manuals:", error));
  }, []);

  return (
    <div className="p-8">
      {/* 显示手册数据 */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {manualBooks.map((manual, index) => (
          <Link
            key={index}
            to={`./${manual.season}`}
            className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow cursor-pointer"
          >
            <img
              src={manual.preview_picture}
              alt={`${manual.title} preview`}
              className="w-full h-48 object-cover lg:h-60"
            />

            <div className="p-6 text-center">
              <h3 className="text-xl font-bold mb-2 text-gray-900">
                {manual.title}
              </h3>
              <p className="text-gray-600 mb-3">{manual.description}</p>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default ManualBooks;
