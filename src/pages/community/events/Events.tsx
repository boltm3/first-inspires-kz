import { useState, useEffect } from 'react';
import { request } from 'graphql-request';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCalendarAlt, faEdit } from '@fortawesome/free-solid-svg-icons';

// GraphQL Query for fetching events
const EVENTS_QUERY = `
  query {
    eventsSearch(season: 2024, region: KZ) {
      name
      code
      address
      finished
      start
      end
    }
  }
`;

interface Event {
  name: string;
  code: string;
  address: string | null;
  finished: boolean;
  start: string;
  end: string;
}

// Define the structure of the API response
interface EventsResponse {
  eventsSearch: Event[] | null;
}

const Events: React.FC = () => {
  const [events, setEvents] = useState<Event[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchEvents = async () => {
      try {
        const data = await request<EventsResponse>('https://api.ftcscout.org/graphql', EVENTS_QUERY);
        setEvents(data.eventsSearch ?? []); // Fallback to an empty array if null
      } catch (err) {
        setError('Failed to fetch events');
      } finally {
        setLoading(false);
      }
    };

    fetchEvents();
  }, []);

  const handleRegister = (name: string) => {
    console.log(`Registering for event: ${name}`);
  };

  const handleDetails = (code: string) => {
    const url = `https://ftcscout.org/events/2024/${code}/matches`;
    window.location.href = url;
  };

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>{error}</div>;
  }

  if (events.length === 0) {
    return <div>No events found.</div>;
  }

  // Sort the events by 'start' date in descending order
  const sortedEvents = [...events].sort((a, b) => new Date(b.start).getTime() - new Date(a.start).getTime());

  // Get the most recent event as the highlighted event
  const highlightedEvent = sortedEvents[0];

  return (
    <div>
      {/* Highlighted Event */}
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
              Register Now
            </button>
          </div>
        </div>
      )}

      {/* Events List */}
      <div className="p-4">
        <h2 className="text-3xl font-semibold mb-4">Upcoming Events</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {sortedEvents.map((event, index) => (
            <div key={index} className="bg-white rounded-lg shadow-lg overflow-hidden">
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">{event.name}</h3>
                <p className="text-gray-500 mb-2">
                  {event.start} to {event.end}
                </p>
                <p className="text-gray-700 mb-4">{event.address || 'No Address...'}</p>
              </div>
              <div className="flex justify-between items-center p-4 bg-gray-100">
                <button
                  className="text-blue-600 hover:text-blue-700 text-sm"
                  onClick={() => handleDetails(event.code)} // Pass the code here
                >
                  <FontAwesomeIcon icon={faCalendarAlt} className="mr-2" />
                  Learn More
                </button>
                <button
                  className="bg-blue-600 hover:bg-blue-700 text-white text-sm px-4 py-2 rounded-full"
                  onClick={() => handleRegister(event.name)}
                >
                  <FontAwesomeIcon icon={faEdit} className="mr-2" />
                  Register
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



