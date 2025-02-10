import FirstCard from '/src/components/costumUI/Card'; // Assuming Card is in the same directory
import CardContainer from '/src/components/costumUI/CardContainer';

const Resources = () => {
  const sections = [
    {
      title: 'manuals кітабы',
      description: 'Жыл бойынша топтастырылған нұсқаулық кітаптарды қараңыз.',
      link: './manuals',
      buttonText: 'Нұсқаулықтарды қарау',
    },
    {
      title: 'Бөлшек жеткізушілері',
      description: 'Бөлшек жеткізушілерін және олардың ресурстарын зерттеңіз.',
      link: './suppliers',
      buttonText: 'Жеткізушілерді қарау',
    },
    {
      title: 'Демеушілер тізімі',
      description: 'Командаларға көмектесетін компанияларды және олардың байланыс ақпаратын қараңыз.',
      link: './sponsors',
      buttonText: 'Демеушілерді қарау',
    },
    {
      title: 'guidebook кітапша',
      description: 'Командаларға арналған нұсқаулық кітапша мен маңызды мәліметтерді табыңыз.',
      link: './guide', // Нақты маршрутқа сәйкес сілтемені түзетіңіз
      buttonText: 'Кітапшаны қарау',
    },
  ];



  return (
<CardContainer
  title="FTC Қазақстан ресурстары"
  content="FTC Қазақстандағы сапарыңызды қолдау үшін нұсқаулықтарды, бөлшек жеткізушілерін және демеушілер тізімін зерттеңіз."
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

export default Resources;
