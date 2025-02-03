import { useState } from 'react';

const videos: Record<'Parents' | 'Students' | 'Educators' | 'Volunteers', string> = {
  Parents: 'https://www.youtube.com/embed/LGI2vMjdLbI',
  Students: 'https://www.youtube.com/embed/kDVGX9nXbCk',
  Educators: 'https://www.youtube.com/embed/kDVGX9nXbCk',
  Volunteers: 'https://www.youtube.com/embed/LGI2vMjdLbI',
};

const HearFromCommunity = () => {
  const [selectedCategory, setSelectedCategory] = useState<keyof typeof videos>('Parents');

  return (
    <div className="p-4 bg-gray-100">
      <div className='mx-10'>
      <h4 className="text-4xl mb-4">Hear from the FIRST Community</h4>
      <p className="text-lg mb-4">
        Watch testimonials from Parents, Students, Educators, and Volunteers!
      </p>

      {/* Video Player */}
      <div className="h-[395px] bg-gray-300 text-center flex items-center justify-center rounded-lg mb-2">
        <iframe
          width="702"
          height="395"
          src={videos[selectedCategory]}
          title={`${selectedCategory} Video`}
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          referrerPolicy="strict-origin-when-cross-origin"
          allowFullScreen
        ></iframe>
      </div>

      {/* Category Buttons */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 justify-center">
        {Object.keys(videos).map((category) => (
          <button
            key={category}
            className={`py-2 px-4 rounded-lg transition ${
              selectedCategory === category
                ? 'bg-blue-500 text-white'
                : 'bg-transparent border-2 border-blue-500 text-blue-500'
            } hover:bg-blue-600 hover:text-white`}
            onClick={() => setSelectedCategory(category as keyof typeof videos)}
          >
            {category}
          </button>
        ))}
      </div>
      </div>
    </div>
  );
};

export default HearFromCommunity;
