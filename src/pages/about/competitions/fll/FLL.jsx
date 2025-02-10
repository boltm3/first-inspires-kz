// src/pages/FLL.jsx
import Section from '/src/components/costumUI/Competitions_Section';

const FLL = () => {
  return (
    <Section
      title="FIRST LEGO League (FLL)"
      description="LEGO негізіндегі робототехника арқылы кіші жастағы оқушыларды STEM әлеміне қызықтыру."
      overviewDescription="Оқушылар LEGO роботтарын құрастырып, бағдарламалап, шығармашылық пен командалық жұмысты дамытады."
      imageSrc="https://ad2ab94.webp.ee/fizmat-fll.jpg"
      imageAlt="Роботтар құрастырып жатқан FLL оқушылары"
      buttonText="FLL туралы көбірек білу"
      buttonLink="https://www.firstinspires.org/robotics/fll"
    />
  );
};

export default FLL;
