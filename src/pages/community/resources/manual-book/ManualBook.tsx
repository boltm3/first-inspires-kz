import React, { useState } from 'react';
import { Link } from 'react-router-dom'; // Import Link

// Define the ManualBook interface for clarity
interface ManualBook {
  season: string;
  title: string;
  description: string;
  preview_picture: string;
  manuals: {
    title: string;
    description: string;
    preview_picture: string;
    download_link: string;
  }[];
}

const ManualBooks: React.FC = () => {
  // Initialize the manual books data directly in the component
  const manualBooks: ManualBook[] = [
    {
      season: "2024-2025",
      title: "Into the Deep",
      description: "A thrilling underwater exploration-themed robotics challenge.",
      preview_picture: "https://example.com/images/2024-2025-preview.jpg",
      manuals: [
        {
          title: "Competition Manual",
          description: "The official guide for the 2024-2025 Into the Deep challenge.",
          preview_picture: "https://example.com/images/2024-2025-manual-preview.jpg",
          download_link: "https://resources.firstrobotics.ru/competition-manual.pdf"
        }
      ]
    },
    {
      season: "2023-2024",
      title: "Center Stage",
      description: "Robotics takes the spotlight in this performance-driven challenge.",
      preview_picture: "https://example.com/images/2023-2024-preview.jpg",
      manuals: [
        {
          title: "Game Manual Part 1",
          description: "The first part of the guide for the 2023-2024 Center Stage challenge.",
          preview_picture: "https://example.com/images/2023-2024-manual1-preview.jpg",
          download_link: "https://resources.firstrobotics.ru/2024/game-manual-part-1.pdf"
        },
        {
          title: "Game Manual Part 2",
          description: "The second part of the guide for the 2023-2024 Center Stage challenge.",
          preview_picture: "https://example.com/images/2023-2024-manual2-preview.jpg",
          download_link: "https://resources.firstrobotics.ru/2024/game-manual-part-2.pdf"
        }
      ]
    }
  ];

  const [, setSelectedManual] = useState<ManualBook | null>(null);

  // Function to select a manual
  const handleCardClick = (manual: ManualBook) => {
    setSelectedManual(manual);
  };

  return (
    <div className="p-8">
      {/* Display Manual Books */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {manualBooks.map((manual, index) => (
          <Link
            key={index}
            to={`./${manual.season}`} // Link to dynamic path
            className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow cursor-pointer"
            onClick={() => handleCardClick(manual)}
          >
            <img
              src={manual.preview_picture}
              alt={`${manual.title} preview`}
              className="w-full h-48 object-cover"
            />
            <div className="p-6 text-center">
              <h3 className="text-xl font-bold mb-2 text-gray-900">{manual.title}</h3>
              <p className="text-gray-600 mb-3">{manual.description}</p>
            </div>
          </Link>
        ))}
      </div>

      {/* Display Selected Manual Details */}

    </div>
  );
};

export default ManualBooks;
