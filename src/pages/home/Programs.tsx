
const Programs = () => {
  return (
    <div className="p-4 flex flex-col items-center">
      <h4 className="text-4xl mb-6 text-center">FIRST Programs</h4>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {[
          {
            title: "FLL",
            description: "Explore LEGO robotics for kids!",
            link: "/about/competitions/fll",
          },
          {
            title: "FTC",
            description: "Intermediate robotics with real-world challenges.",
            link: "/about/competitions/ftc",
          },
          {
            title: "FRC",
            description: "Advanced robotics competition for high schoolers.",
            link: "/about/competitions/frc",
          },
        ].map((program, index) => (
          <div key={index} className="bg-white rounded-lg shadow-lg overflow-hidden">
            <div className="p-4">
              <h6 className="text-xl font-semibold">{program.title}</h6>
              <p className="text-base mb-4">{program.description}</p>
              <a
                href={program.link}
                className="bg-blue-500 text-white py-2 px-4 rounded-lg hover:bg-blue-600 transition"
              >
                About {program.title}
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Programs;
