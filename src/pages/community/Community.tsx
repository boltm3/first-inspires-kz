import FirstCard from "@/components/costumUI/Card";

const Community = () => {
  const sections = [
    {
      title: "Forum",
      description:
        "Join discussions, ask questions, share ideas, and learn from others.",
      link: "/community/forum", // Link to the forum section
    },
    {
      title: "Events",
      description:
        "Explore upcoming events, register, and participate in exciting competitions.",
      link: "/community/events", // Link to the events section
    },
    {
      title: "Teams",
      description:
        "Find team profiles, connect with partners, and share your experiences.",
      link: "/community/teams", // Link to the teams section
    },
    {
      title: "Archive",
      description:
        "Access past designs, documentation, and code from FTC Kazakhstan teams",
      link: "/community/archive",
    },
    {
      title: "Resources",
      description:
        "Explore manuals, parts suppliers, and sponsor lists ",
      link: "/community/resources",
    },
  ];

  return (
    <div className="p-10 bg-gray-100">
      <h3 className="text-3xl font-bold text-center text-gray-900 mb-4">
        Welcome to the Community
      </h3>
      <p className="text-lg text-center text-gray-600 mb-8">
        Connect with others, discover events, and participate in exciting discussions within the FIRST Kazakhstan community.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {sections.map((section, index) => (
          <FirstCard
            key={index}
            title={section.title}
            description={section.description}
            link={section.link}
            buttonText='Learn More'
          />
        ))}
      </div>
    </div>
  );
};

export default Community;
