const FRC = () => {
  return (
    <div className="max-w-4xl mx-auto px-4 py-8">
      <div className="text-center mb-8">
        <h3 className="text-3xl font-semibold mb-2">FIRST Robotics Competition (FRC)</h3>
        <p className="text-lg text-gray-600">Challenging high school students to build and program robots to compete in complex games.</p>
      </div>

      {/* Image at the top */}
      <div className="mb-8">
        <img
          src="https://ad2ab94.webp.ee/frc-kz.jpg" // Replace with your actual image
          alt="FRC team working on a robot"
          className="w-full rounded-lg mx-auto"
        />
      </div>

      {/* Overview Section */}
      <div className="bg-white rounded-lg shadow-md p-6">
        <h5 className="text-2xl font-semibold mb-4">Overview</h5>
        <p className="text-lg">
          <strong>Age Group:</strong> Grades 9-12
        </p>
        <p className="mt-4 text-lg">
          Teams of students work together to design, build, and program robots to compete in high-stakes games. FRC emphasizes engineering, innovation, and teamwork in a competitive setting.
        </p>
      </div>

      {/* Learn More Button */}
      <div className="mt-8 text-center">
        <a
          href="https://www.firstinspires.org/robotics/frc" // Update to relevant link for FRC
          className="inline-block bg-blue-600 text-white text-center py-3 px-6 rounded-lg hover:bg-blue-700"
        >
          Learn More About FRC
        </a>
      </div>
    </div>
  );
};

export default FRC;
