import { Link } from 'react-router-dom';
import CardContainer from '/src/components/costumUI/CardContainer'; // Import CardContainer
import FirstCard from '/src/components/costumUI/Card'; // Import FirstCard

const Competitions = () => {
  const competitionSections = [
    {
      title: 'First Lego League',
      description: 'Жас оқушыларға LEGO негізіндегі робототехника арқылы STEM-ді зерттеуге арналған.',
      link: '/about/competitions/fll',
      buttonText: 'FLL туралы көбірек білу',
    },
    {
      title: 'First Tech Challenge',
      description: 'Орта және жоғары сынып оқушыларына өздері жасақтайтын роботтармен жарысуға мүмкіндік береді.',
      link: '/about/competitions/ftc',
      buttonText: 'FTC туралы көбірек білу',
    },
    {
      title: 'First Robotics Competition',
      description: 'Жоғары сынып оқушыларына арналған ең ауқымды робототехника жарысы.',
      link: '/about/competitions/frc',
      buttonText: 'FRC туралы көбірек білу',
    },
  ];


  return (
    <CardContainer
      title="Our Competitions"
      content="Discover the exciting robotics competitions offered by FIRST for students of all ages."
    >
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {competitionSections.map((section, index) => (
          <FirstCard
            key={index}
            title={section.title}
            description={section.description}
            link={section.link}
            buttonText={section.buttonText}
          />
        ))}
      </div>

      <div className="text-center mt-8">
        <Link to="/community/events" className="block">
          <button className="py-2 px-6 bg-green-600 text-white rounded-lg hover:bg-green-700">
          Жақын жерден жарыс табыңыз
          </button>
        </Link>
      </div>
    </CardContainer>
  );
};

export default Competitions;
