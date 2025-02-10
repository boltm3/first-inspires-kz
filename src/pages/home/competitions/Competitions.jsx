import CompetitionCard from "./CompetitionCard";
const Competitions = () => {
  return (
    <div className="flex flex-wrap justify-center gap-8 px-6 py-8">
      {/* FIRST Lego League */}
      <CompetitionCard
        title="FIRST"
        subtitle="LEGO LEAGUE"
        subtitleColor="#F93737"
        description="Балаларға арналған LEGO робототехникасының мүмкіндіктерін зерттеңіз!"
        imageUrl="https://first.image.firstinspireskz.org/home-fll.png"
        buttonText="FLL туралы"
        linkTo="/about/competitions/fll"
      />


      {/* FIRST Tech Challenge */}
      <CompetitionCard
        title="FIRST"
        subtitle="TECH CHALLENGE"
        subtitleColor="#ED7022"
        description="Шынайы өмірдегі қиындықтарды қамтитын орта деңгейдегі робототехника."
        imageUrl="https://first.image.firstinspireskz.org/home-ftc.png"
        buttonText="FTC туралы"
        linkTo="/about/competitions/ftc"
      />

      {/* FIRST Robotics Competition */}
      <CompetitionCard
        title="FIRST"
        subtitle="ROBOTICS COMPETITION"
        subtitleColor="#00bfff"
        description="Орта мектеп оқушыларына арналған жоғары деңгейлі робототехника жарысы."
        imageUrl="https://first.image.firstinspireskz.org/home-frc.png"
        buttonText="FRC туралы"
        linkTo="/about/competitions/frc"
      />
    </div>
  );
};

export default Competitions;
