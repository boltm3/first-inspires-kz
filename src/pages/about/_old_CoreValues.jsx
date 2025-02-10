import { IoRocketOutline, IoPeopleOutline, IoTrophyOutline, IoGiftOutline, IoBarChartOutline, IoFootballOutline } from 'react-icons/io5';

const coreValues = [
  { icon: <IoRocketOutline size={40} color="#1D2031" />, title: 'Discovery', description: 'We explore new skills & ideas.' },
  { icon: <IoPeopleOutline size={40} color="#1D2031" />, title: 'Innovation', description: 'We use creativity and persistence to solve problems.' },
  { icon: <IoTrophyOutline size={40} color="#1D2031" />, title: 'Impact', description: 'We apply what we learn to improve our world.' },
  { icon: <IoGiftOutline size={40} color="#1D2031" />, title: 'Inclusion', description: 'We respect each other and embrace our differences.' },
  { icon: <IoBarChartOutline size={40} color="#1D2031" />, title: 'Teamwork', description: 'We are stronger when we work together.' },
  { icon: <IoFootballOutline size={40} color="#1D2031" />, title: 'Fun', description: 'We enjoy and celebrate what we do!' },
];

const CoreValues = () => {
  return (
    <div className="mt-12 text-center">
      <h4 className="text-3xl font-bold text-gray-900 mb-4">
        Our Core Values
      </h4>
      <p className="text-lg text-gray-600 mb-8">
        The FIRST Core Values are fundamental to everything we do, promoting teamwork, respect, inclusion, and a passion for innovation.
      </p>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
        {coreValues.map((value, index) => (
          <div className="bg-white p-6 rounded-lg shadow-lg text-center" key={index}>
            <div className="text-blue-900">{value.icon}</div>
            <h6 className="text-xl font-bold text-gray-900 mb-2">
              {value.title}
            </h6>
            <p className="text-gray-600">
              {value.description}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CoreValues;
