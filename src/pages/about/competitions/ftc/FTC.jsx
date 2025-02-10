// src/pages/FTC.jsx
import Section from '/src/components/costumUI/Competitions_Section';

const FTC = () => {
  return (
    <Section
      title="FIRST Tech Challenge (FTC)"
      description="Қазақстандағы оқушыларға инновациялық роботтар құрастырып, STEM жарыстарына қатысу мүмкіндігін беру."
      overviewDescription="Оқушылар командаларға бірігіп, роботтарды жобалап, құрастырып және бағдарламалап, түрлі жарыстарда бақ сынайды. FTC командалық жұмыс, инженерия және мәселелерді шешу дағдыларын дамытуға бағытталған."
      imageSrc="https://ad2ab94.webp.ee/ftc-2017.jpg"
      imageAlt="FTC командалары роботтар құрастыруда"
      buttonText="FTC туралы көбірек білу"
      buttonLink="https://www.firstinspires.org/robotics/ftc"
    />
  );
};

export default FTC;
