function Mission() {
  return (
    <div className="p-8">
      {/* Title Section */}
      <h3 className="text-3xl text-center font-bold mb-6">
        Our Mission and Vision
      </h3>

      {/* Mission Statement */}
      <p className="text-xl mb-4">
        Empowering youth through STEM to build a better future for everyone.
      </p>

      <p className="text-lg mb-4">
        <strong>Our Mission</strong>: Inspiring young people to develop skills, confidence, and resilience through STEM education. We provide platforms such as robotics competitions to teach problem-solving through teamwork.
      </p>

      <p className="text-lg mb-4">
        <strong>Our Vision</strong>: Creating a world where every child has the opportunity to become an innovator and leader.
      </p>

      {/* Core Values Section */}
      <h4 className="text-lg font-semibold mb-4">
        <strong>Core Values</strong>
      </h4>
      
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        {['Discovery', 'Innovation', 'Impact', 'Teamwork', 'Inclusion', 'Fun'].map((value) => (
          <div key={value} className="p-4 bg-gray-100 rounded-lg">
            <h5 className="text-xl font-semibold">{value}</h5>
            <p className="text-base">
              {value === 'Discovery' && 'Exploring new skills and ideas.'}
              {value === 'Innovation' && 'Encouraging creativity and innovation.'}
              {value === 'Impact' && 'Making a positive impact on communities through STEM.'}
              {value === 'Teamwork' && 'Collaboration is key to success.'}
              {value === 'Inclusion' && 'Welcoming everyone from diverse backgrounds.'}
              {value === 'Fun' && 'Learning and growing while having fun.'}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Mission;
