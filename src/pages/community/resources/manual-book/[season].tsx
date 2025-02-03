import React from 'react';
import { useParams } from 'react-router-dom';

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

const ManualBookDetail: React.FC = () => {
  const { season } = useParams<{ season: string }>(); // Get the season from URL params
  
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

  // Find the selected manual based on the season from the URL
  const selectedManual = manualBooks.find(book => book.season === season);

  return (
    <div className="p-8">
      {selectedManual ? (
        <div className="mt-8 bg-white p-6 rounded-lg shadow-md">
          <h2 className="text-3xl font-bold text-gray-800">{selectedManual.title}</h2>
          <p className="text-gray-600 mb-4">{selectedManual.description}</p>
          <h4 className="text-xl font-semibold text-gray-800">Manual Details</h4>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {selectedManual.manuals.map((manual, index) => (
              <div key={index} className="bg-white rounded-lg shadow-lg overflow-hidden">
                <img
                  src={manual.preview_picture}
                  alt={manual.title}
                  className="w-full h-48 object-cover"
                />
                <div className="p-4">
                  <h5 className="text-lg font-semibold text-gray-800">{manual.title}</h5>
                  <p className="text-gray-600 mb-4">{manual.description}</p>
                  <a
                    href={manual.download_link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-500 hover:text-blue-700 underline"
                  >
                    Download
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      ) : (
        <p className="text-center text-gray-500">Manual not found for the selected season.</p>
      )}
    </div>
  );
};

export default ManualBookDetail;
