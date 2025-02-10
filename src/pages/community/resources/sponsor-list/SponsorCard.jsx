import PropTypes from "prop-types";

const SponsorCard = ({ sponsor, isExpanded, onToggle }) => {
  return (
    <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow">
      <h3 className="text-xl font-bold text-gray-900">{sponsor.name}</h3>
      <p className="text-gray-700 mt-2">{sponsor.description}</p>

      <div className="text-gray-700 mt-4">
        {sponsor.contact.email && (
          <p>
            Email:{" "}
            <a
              href={`mailto:${sponsor.contact.email}`}
              className="text-blue-500"
            >
              {sponsor.contact.email}
            </a>
          </p>
        )}
        {sponsor.contact.phone && <p>Phone: {sponsor.contact.phone}</p>}
        {sponsor.contact.website && (
          <p>
            Website:{" "}
            <a
              href={sponsor.contact.website}
              className="text-blue-500"
              target="_blank"
              rel="noopener noreferrer"
            >
              {sponsor.contact.website}
            </a>
          </p>
        )}
      </div>

      {/* Sponsorship Details */}
      <div className="mt-4">
        <h4 className="text-lg font-semibold cursor-pointer" onClick={onToggle}>
          Демеушілік мәліметтері {isExpanded ? "▲" : "▼"}
        </h4>
        {isExpanded && (
          <div className="mt-2">
            {sponsor.sponsorship_details &&
            sponsor.sponsorship_details.length > 0 ? (
              <ul className="list-disc pl-6">
                {sponsor.sponsorship_details.map((detail, detailIndex) => (
                  <li key={detailIndex}>
                    Команда ID: {detail.team_id}, Жыл: {detail.year}
                    {detail.description && (
                      <p className="text-gray-600 mt-1">
                        Сипаттама: {detail.description}
                      </p>
                    )}
                  </li>
                ))}
              </ul>
            ) : (
                <p className="text-gray-500 italic">Әзірге демеушілік алған командалар жоқ.</p>

            )}
          </div>
        )}
      </div>
    </div>
  );
};

// ✅ Define PropTypes for the component
SponsorCard.propTypes = {
  sponsor: PropTypes.shape({
    name: PropTypes.string.isRequired,
    description: PropTypes.string,
    contact: PropTypes.shape({
      email: PropTypes.string,
      phone: PropTypes.string,
      website: PropTypes.string,
    }),
    sponsorship_details: PropTypes.arrayOf(
      PropTypes.shape({
        team_id: PropTypes.string.isRequired,
        year: PropTypes.number.isRequired,
        description: PropTypes.string,
      })
    ).isRequired,
  }).isRequired,
  isExpanded: PropTypes.bool.isRequired,
  onToggle: PropTypes.func.isRequired,
};

export default SponsorCard;
