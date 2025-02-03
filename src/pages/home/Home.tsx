import Hero from "./Hero"; // Import Hero Component
import Statistics from "./Statistics"; // Import Statistics Component
import Programs from "./Programs"; // Import Programs Component
import CallAction from "./CallAction"; // Import CallAction Component
import HearFromCommunity from "./HearFromCommunity";

const HomePage = () => {
  return (
    <>
      {/* Hero Section */}
      <Hero /> {/* Use Hero Component here */}
      <div className="mx-14">

        {/* Statistics Section */}
        <Statistics /> {/* Use Statistics Component here */}

        {/* Programs Section */}
        <Programs /> {/* Use Programs Component here */}
        </div>
        {/* Community Section */}
        <HearFromCommunity />

        {/* Call to Action Section */}
        <CallAction /> {/* Use CallAction Component here */}

      

    </>
  );
};

export default HomePage;
