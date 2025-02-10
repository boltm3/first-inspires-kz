import { useState, useEffect } from 'react';
import { request } from 'graphql-request';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCalendarAlt } from '@fortawesome/free-solid-svg-icons';

const getAdjustedYear = () => {
  const currentDate = new Date();
  const year = currentDate.getFullYear();
  const month = currentDate.getMonth();
  return month < 8 ? year - 1 : year;
};

const EVENTS_QUERY = `
  query {
    eventsSearch(season: ${getAdjustedYear()}, region: KZ) {
      name
      code
      address
      finished
      start
      end
    }
  }
`;


const Events = () => {
  const [events, setEvents] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchEvents = async () => {
      try {
        const data = await request('https://api.ftcscout.org/graphql', EVENTS_QUERY);
        setEvents(data.eventsSearch ?? []);
      // eslint-disable-next-line no-unused-vars
      } catch (err) {
        setError('Failed to fetch events');
      } finally {
        setLoading(false);
      }
    };

    fetchEvents();
  }, []);

  const handleRegister = (name) => {
    console.log(`Registering for event: ${name}`);
  };

  const handleDetails = (code) => {
    window.location.href = `https://ftcscout.org/events/2024/${code}/matches`;
  };

  if (loading) return <div>Loading...</div>;
  if (error) return <div>{error}</div>;
  if (events.length === 0) return <div>No events found.</div>;

  const sortedEvents = [...events].sort((a, b) => new Date(b.start) - new Date(a.start));
  const highlightedEvent = sortedEvents[0];

  return (
    <div>
      {highlightedEvent && (
        <div className="relative bg-cover bg-center text-white p-8 m-4 bg-black bg-opacity-10">
          <div className="absolute inset-0 bg-black opacity-40"></div>
          <div className="relative z-10 text-center">
            <h2 className="text-4xl font-bold mb-2">{highlightedEvent.name}</h2>
            <p className="text-lg mb-2">Start: {highlightedEvent.start}</p>
            <p className="text-lg mb-4">End: {highlightedEvent.end}</p>
            <p className="text-md mb-4">{highlightedEvent.address || 'No Address...'}</p>
            <button
              className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-full"
              onClick={() => handleRegister(highlightedEvent.name)}
            >
              Тіркелу
            </button>
          </div>
        </div>
      )}

<div className="p-4">
  <h2 className="text-3xl font-semibold mb-4">Алдағы Оқиғалар</h2>
  <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
    {sortedEvents.map((event, index) => (
      <div key={index} className="bg-white rounded-lg shadow-lg overflow-hidden flex flex-col">
        <div className="p-6 flex-grow">
          <h3 className="text-xl font-semibold mb-2">{event.name}</h3>
          <p className="text-gray-500 mb-2">{event.start} - {event.end} аралығы</p>
          <p className="text-gray-700">{event.address || 'Мекенжай жоқ...'}</p>
        </div>
        <div className="p-4 bg-gray-100 mt-auto">
        <button
  className="w-full text-blue-600 hover:text-blue-700 text-sm flex items-center justify-start mx-2"
  onClick={() => handleDetails(event.code)}
>
  <FontAwesomeIcon icon={faCalendarAlt} className="mr-2" /> Көбірек білу
</button>

        </div>
      </div>
    ))}
  </div>
</div>

    </div>
  );
};

export default Events;
