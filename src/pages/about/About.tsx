import FirstCard from '@/components/costumUI/Card'; // Assuming Card is in the same directory

const About = () => {
  const sections = [
    {
      title: 'Mission and Vision',
      description: 'Inspiring youth to explore STEM and empowering their future through education. FIRST is More Than Robots®.',
      link: '/about/mission',
      buttonText: 'Learn More About Our Mission',
    },
    {
      title: 'Our Journey',
      description: 'Tracing our legacy from a single idea to a global movement.',
      link: '/about/history',
      buttonText: 'Explore Our History',
    },
    {
      title: 'Competitions We Offer',
      description: 'Discover the exciting robotics competitions we offer.',
      link: '/about/competitions',
      buttonText: 'Discover Our Competitions',
    },
  ];

  return (
    <div className="p-10 bg-gray-100">
      <h3 className="text-3xl font-bold text-center text-gray-900 mb-4">About FIRST Kazakhstan</h3>
      <p className="text-lg text-center text-gray-600 mb-8">
        Learn about our mission, vision, history, and the exciting competitions we organize to inspire the next generation of innovators.
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

export default About;
