import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

const GuideBooks = () => {
  const [guideBooks, setGuideBooks] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    fetch("/guideBooks.json") // 确保 guideBooks.json 放在 public 目录
      .then((response) => response.json())
      .then((data) => setGuideBooks(data))
      .catch((error) => console.error("Error loading guide books:", error));
  }, []);

  const handleCardClick = (url) => {
    navigate(
      `/community/resources/guide/preview?url=${encodeURIComponent(url)}`
    );
  };

  return (
    <div className="p-8">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {guideBooks.map((guide, index) => {
          const Wrapper = guide.url_download ? "div" : "a";
          const wrapperProps = guide.url_download
            ? { onClick: () => handleCardClick(guide.url_download) }
            : { href: guide.url, target: "_blank", rel: "noopener noreferrer" };

          return (
            <Wrapper
              key={index}
              {...wrapperProps}
              className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow cursor-pointer block"
            >
              <img
                src={guide.preview_picture}
                alt={`${guide.title} preview`}
                className="w-full h-48 object-cover"
              />
              <div className="p-6 text-center">
                <h3 className="text-xl font-bold mb-2 text-gray-900">
                  {guide.title}
                </h3>
                <p className="text-gray-600 mb-3">{guide.description}</p>
              </div>
            </Wrapper>
          );
        })}
      </div>
    </div>
  );
};

export default GuideBooks;
