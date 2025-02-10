import FirstCard from "/src/components/costumUI/Card"; // Assuming Card is in the same directory
import CardContainer from '/src/components/costumUI/CardContainer';

const About = () => {
  const sections = [
    {
      title: 'Миссия және Көзқарас',
      description: 'Жастарды STEM-ді зерттеуге шабыттандыру және оларды білім арқылы болашаққа дайындау. FIRST – бұл жай ғана роботтар емес®.',
      link: '/about/mission',
      buttonText: 'Миссиямыз туралы көбірек білу',
    },
    {
      title: 'Біздің Тарихымыз',
      description: 'Бір идеядан бастап, жаһандық қозғалысқа дейінгі тарихымыз.',
      link: '/about/history',
      buttonText: 'Тарихымызды зерттеу',
    },
    {
      title: 'Біз Ұсынатын Жарыстар',
      description: 'Біз ұсынатын қызықты робототехника жарыстарымен танысыңыз.',
      link: '/about/competitions',
      buttonText: 'Жарыстарымызды ашу',
    },
  ];


  return (
<CardContainer
  title="FIRST Kazakhstan туралы"
  content="Біздің миссиямыз, көзқарасымыз, тарихымыз және келесі буын жаңашылдарын шабыттандыру үшін ұйымдастыратын қызықты жарыстарымыз туралы біліңіз."
>


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
      </CardContainer>
  );
};

export default About;
