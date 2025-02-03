import React, { useState } from 'react';

// Define Sponsor interface for clarity
interface Contact {
  email?: string;
  phone?: string;
  website?: string;
}

interface SponsorshipDetail {
  team_id: string;
  year: string;
  description?: string;
}

interface Sponsor {
  name: string;
  contact: Contact;
  description: string;
  sponsorship_details: SponsorshipDetail[];
}

const SponsorsList: React.FC = () => {
  const [searchQuery, setSearchQuery] = useState<string>("");
  const [expandedSponsorIndex, setExpandedSponsorIndex] = useState<number | null>(null); // State to track expanded sponsor

  const sponsors: Sponsor[] = [
    {
      name: "Tech Robotics Solutions",
      contact: {
        email: "contact@techrobotics.com",
        phone: "+1 234-567-8901",
        website: "https://www.techrobotics.com"
      },
      description: "Tech Robotics Solutions provides cutting-edge robotics components, specializing in high-performance motors and sensors designed for robotics teams and STEM enthusiasts.",
      sponsorship_details: [
        { team_id: "FTC1234", year: "2023", description: "Provided funding for team gear" },
        { team_id: "FTC5678", year: "2024", description: "Sponsored travel expenses" }
      ]
    },
    {
      name: "Innovate Robotics Corp",
      contact: {
        email: "support@innovaterobotics.com",
        phone: "+1 345-678-9012",
        website: "https://www.innovaterobotics.com"
      },
      description: "Innovate Robotics Corp is a leader in robotics innovation, offering a range of products including customizable robot kits, sensors, and educational resources to support teams in competitions like FTC.",
      sponsorship_details: [
        { team_id: "FTC8765", year: "2022", description: "Offered mentorship and technical support" },
        { team_id: "FTC4321", year: "2024", description: "Donated equipment for robot assembly" }
      ]
    },
    {
      name: "Robot Engineering Group",
      contact: {
        email: "info@robotenggroup.com",
        phone: "+1 456-789-0123",
        website: "https://www.robotenggroup.com"
      },
      description: "Robot Engineering Group is a well-established robotics company focused on providing premium robotics kits, parts, and engineering solutions for teams at all levels of competition.",
      sponsorship_details: [
        { team_id: "FTC1111", year: "2021", description: "Provided a full robotics kit" },
        { team_id: "FTC2222", year: "2023", description: "Sponsored team registration fees" }
      ]
    }
  ];

  // Filter sponsors based on search query
  const filteredSponsors = sponsors.filter(sponsor =>
    sponsor.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
    sponsor.description.toLowerCase().includes(searchQuery.toLowerCase())
  );

  // Toggle sponsorship details visibility
  const toggleSponsorshipDetails = (index: number) => {
    setExpandedSponsorIndex(expandedSponsorIndex === index ? null : index);
  };

  return (
    <div className="p-8">
      <h2 className="text-2xl font-bold mb-6">Sponsor List</h2>
      
      {/* Search Input */}
      <input
        type="text"
        placeholder="Search Sponsors"
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
        className="p-2 mb-4 border border-gray-300 rounded-lg w-full"
      />

      <div className="space-y-6">
        {filteredSponsors.length > 0 ? (
          filteredSponsors.map((sponsor, index) => (
            <div key={index} className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow">
              <h3 className="text-xl font-bold text-gray-900">{sponsor.name}</h3>
              
              {/* Display Company Description */}
              <p className="text-gray-700 mt-2">{sponsor.description}</p>
              
              <div className="text-gray-700 mt-4">
                {/* Display Contact Information */}
                {sponsor.contact.email && (
                  <p>Email: <a href={`mailto:${sponsor.contact.email}`} className="text-blue-500">{sponsor.contact.email}</a></p>
                )}
                {sponsor.contact.phone && (
                  <p>Phone: <span>{sponsor.contact.phone}</span></p>
                )}
                {sponsor.contact.website && (
                  <p>Website: <a href={sponsor.contact.website} className="text-blue-500" target="_blank" rel="noopener noreferrer">{sponsor.contact.website}</a></p>
                )}
              </div>

              {/* Sponsorship Details Section */}
              <div className="mt-4">
                <h4 className="text-lg font-semibold cursor-pointer" onClick={() => toggleSponsorshipDetails(index)}>
                  Sponsorship Details {expandedSponsorIndex === index ? "▲" : "▼"}
                </h4>
                {expandedSponsorIndex === index && (
                  <ul className="list-disc pl-6 mt-2">
                    {sponsor.sponsorship_details.map((detail, detailIndex) => (
                      <li key={detailIndex}>
                        Team ID: {detail.team_id}, Year: {detail.year}
                        {detail.description && <p className="text-gray-600 mt-1">Description: {detail.description}</p>}
                      </li>
                    ))}
                  </ul>
                )}
              </div>
            </div>
          ))
        ) : (
          <p className="text-gray-500">No sponsors found matching your search.</p>
        )}
      </div>
    </div>
  );
};

export default SponsorsList;
