import React from 'react'; // To enable navigation
import FirstCard from '@/components/costumUI/Card'; // Assuming FirstCard is used for each section

const Resources: React.FC = () => {
  const sections = [
    {
      title: 'Manual Book',
      description: 'View the manual books categorized by year.',
      link: './manuals', // Correct the link to reflect the actual route
      buttonText: 'View Manuals',
    },
    {
      title: 'Parts Suppliers',
      description: 'Explore parts suppliers and their resources.',
      link: './suppliers', // Correct the link to reflect the actual route
      buttonText: 'View Suppliers',
    },
    {
      title: 'Sponsor List',
      description: 'View companies that help teams and their contact details.',
      link: './sponsors', // Correct the link to reflect the actual route
      buttonText: 'View Sponsors',
    },
  ];

  return (
    <div className="p-10 bg-gray-100">
      <h2 className="text-3xl font-bold text-center mb-6">FTC Kazakhstan Resources</h2>

      <p className="text-lg text-center text-gray-600 mb-8">
        Explore manuals, parts suppliers, and sponsor lists to support your journey in FTC Kazakhstan.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {sections.map((section, index) => (
          <FirstCard
            key={index}
            title={section.title}
            description={section.description}
            link={section.link}
            buttonText={section.buttonText}
          />
        ))}
      </div>
    </div>
  );
};

export default Resources;
