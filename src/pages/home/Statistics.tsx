import { Link } from "react-router-dom";

const Statistics = () => {
  return (
    <div className="p-4 flex flex-col items-center">
      <h4 className="text-4xl mb-6 text-center">FIRST in Kazakhstan: Key Statistics</h4>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-4">
        {[
          { title: "Number of Teams", value: "100+", link: "/community/teams" },
          { title: "Annual Competitions", value: "5+", link: "/community/events" },
        ].map((stat, index) => (
          <Link
            key={index}
            to={stat.link} // Adding the `to` property for routing
            className="bg-white rounded-lg shadow-lg overflow-hidden"
          >
            <div className="p-4">
              <h6 className="text-xl font-semibold">{stat.title}</h6>
              <p className="text-base">{stat.value}</p>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Statistics;
