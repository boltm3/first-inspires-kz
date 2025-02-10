import FirstCard from "/src/components/costumUI/Card"; // Assuming Card is in the same directory
import CardContainer from '/src/components/costumUI/CardContainer';

const Community = () => {  
  const sections = [  
    {  
      title: "Форум",  
      description:  
        "Талқылауларға қатысып, сұрақ қойып, идеялармен бөлісіп, басқа адамдардан үйрен.",  
      link: "/community/forum",  
      buttonText: "Форумға қосылу",  
    },  
    {  
      title: "Оқиғалар",  
      description:  
        "Алдағы іс-шараларды қарап, тіркеліп, жарыстарға қатыс.",  
      link: "/community/events",  
      buttonText: "Оқиғаларды қарау",  
    },  
    {  
      title: "Командалар",  
      description:  
        "Командалар профилін қарап, серіктестер тауып, тәжірибеңмен бөліс.",  
      link: "/community/teams",  
      buttonText: "Командаларды зерттеу",  
    },  
    {  
      title: "Мұрағат",  
      description:  
        "FTC Қазақстан командаларының өткен дизайндарын, құжаттарын және кодтарын қара.",  
      link: "/community/archive",  
      buttonText: "Мұрағатты қарау",  
    },  
    {  
      title: "Ресурстар",  
      description:  
        "Нұсқаулықтар, бөлшек жеткізушілер және демеушілер тізімін қарап шық.",  
      link: "/community/resources",  
      buttonText: "Ресурстарға қол жеткізу",  
    },  
  ];  



  return (
<CardContainer  
  title="FIRST Қазақстан қауымдастығы"  
  content="Қауымдастыққа қосылыңыз, басқалармен байланысыңыз, іс-шараларды зерттеңіз және FIRST Қазақстан аясында қызықты талқылауларға қатысыңыз."  
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

export default Community;
