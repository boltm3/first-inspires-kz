const FLL = () => {
  return (
    <div className="max-w-4xl mx-auto px-4 py-8">
      <div className="text-center mb-8">
        <h3 className="text-3xl font-semibold mb-2">FIRST LEGO League (FLL)</h3>
        <p className="text-lg text-gray-600">Introduce younger students to the fun of STEM through LEGO-based robotics.</p>
      </div>

      {/* Image at the top */}
      <div className="mb-8">
        <img
          src="https://ad2ab94.webp.ee/fizmat-fll.jpg"
          alt="FLL students building robots"
          className="w-full rounded-lg mx-auto"
        />
      </div>

      {/* Overview Section */}
      <div className="bg-white rounded-lg shadow-md p-6">
        <h5 className="text-2xl font-semibold mb-4">Overview</h5>
        <p className="text-lg">
          <strong>Age Group:</strong> Grades K-8
        </p>
        <p className="mt-4 text-lg">
          Students build and program LEGO robots to complete challenges, sparking creativity and teamwork.
        </p>
      </div>

      {/* Learn More Button */}
      <div className="mt-8 text-center">
        <a
          href="https://www.firstinspires.org/robotics/fll"
          className="inline-block bg-blue-600 text-white text-center py-3 px-6 rounded-lg hover:bg-blue-700"
        >
          Learn More About FLL
        </a>
      </div>
    </div>
  );
};

export default FLL;
