import React from 'react';

// Define the PartsSupplier interface for clarity
interface PartsSupplier {
  name: string;
  link: string;
  description: string;
  image: string;
}

const PartsSuppliers: React.FC = () => {
  // Initialize the parts suppliers data directly in the component
  const partsSuppliers: PartsSupplier[] = [
    {
      name: "GoBilda",
      link: "https://www.gobilda.com",
      description: "GoBilda offers a wide variety of robotics parts, including motors, wheels, and structural components, designed for use in robotics competitions and other STEM projects.",
      image: "https://example.com/images/gobilda-logo.jpg"
    },
    {
      name: "AndyMark",
      link: "https://www.andymark.com",
      description: "AndyMark is a leading supplier of robotics kits, motors, sensors, and other parts. They provide components for FIRST Robotics teams and other robotics enthusiasts.",
      image: "https://example.com/images/andymark-logo.jpg"
    }
  ];

  // Function to handle the card click event and open the supplier's website in a new tab
  const handleCardClick = (url: string) => {
    window.open(url, "_blank"); // Open the URL in a new tab
  };

  return (
    <div className="p-8">
      {/* Display Parts Suppliers */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {partsSuppliers.map((supplier, index) => (
          <div
            key={index}
            className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow cursor-pointer"
            onClick={() => handleCardClick(supplier.link)} // Call handleCardClick on card click
          >
            <img
              src={supplier.image}
              alt={`${supplier.name} logo`}
              className="w-full h-48 object-cover"
            />
            <div className="p-6 text-center">
              <h3 className="text-xl font-bold mb-2 text-gray-900">{supplier.name}</h3>
              <p className="text-gray-600 mb-3">{supplier.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PartsSuppliers;
