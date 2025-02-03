import { Link } from 'react-router-dom';

const Competitions = () => {
  return (
    <div className="p-8">
      <h3 className="text-3xl font-semibold text-center mb-4">Our Competitions</h3>
      <p className="text-lg text-center text-gray-600 mb-8">
        Discover the exciting robotics competitions offered by FIRST.
      </p>

      <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
        {['FLL', 'FTC', 'FRC'].map((competition) => (
          <div key={competition} className="p-6 bg-gray-100 rounded-lg">
            <h6 className="text-xl font-semibold">{competition}</h6>
            <p className="mt-4 text-lg">
              {competition === 'FLL' && 'For younger students to explore STEM through LEGO-based robotics.'}
              {competition === 'FTC' && 'For middle and high school students to compete with customizable robots.'}
              {competition === 'FRC' && 'For high school students to compete in the ultimate robotics competition.'}
            </p>
            <Link to={`/about/competitions/${competition.toLowerCase()}`} className="mt-4 w-full block">
              <button className="w-full py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700">
                Learn More
              </button>
            </Link>
          </div>
        ))}
      </div>

      <div className="text-center mt-8">
        <Link to="/community/events" className="block">
          <button className="py-2 px-6 bg-green-600 text-white rounded-lg hover:bg-green-700">
            Find a Competition Near You
          </button>
        </Link>
      </div>
    </div>
  );
};

export default Competitions;
