// src/pages/FRC.jsx
import Section from '/src/components/costumUI/Competitions_Section';

const FRC = () => {
  return (
    <Section
      title="FIRST Robotics Competition (FRC)"
      description="Мектеп оқушыларын күрделі ойындарда жарысу үшін роботтарды құрастырып, бағдарламалауға шақыру."
      overviewDescription="Оқушылар командаларға бірігіп, роботтарды жобалап, құрастырып және бағдарламалап, жоғары деңгейлі жарыстарға қатысады. FRC инженерияны, инновацияны және командалық жұмысты бәсекелі ортада дамытады."
      imageSrc="https://ad2ab94.webp.ee/frc-kz.jpg"
      imageAlt="Роботпен жұмыс істеп жатқан FRC командасы"
      buttonText="FRC туралы көбірек білу"
      buttonLink="https://www.firstinspires.org/robotics/frc"
    />
  );
};

export default FRC;
