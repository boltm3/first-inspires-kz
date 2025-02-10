import { Link } from 'react-router-dom';

export default function FirstKazakhstanStats() {
  return (
    <div className="relative flex flex-col items-center h-auto py-10 px-4 md:px-0">
      <h1 className="text-black text-5xl md:text-[60.81px] font-bold font-montserrat leading-tight text-center">
      FIRST Қазақстанда
      </h1>
      <h2 className="text-[#0066b3] text-3xl md:text-5xl font-medium font-montserrat mt-4 text-center">
      НЕГІЗГІ СТАТИСТИКА
      </h2>
      <div className="flex flex-wrap justify-center gap-6 mt-8">
        <Link to="/community/teams" className="w-full md:w-[538px] px-6 py-8 bg-white rounded-xl shadow-lg border-4 border-[#0066b3] flex flex-col gap-4 text-center transform transition-transform duration-300 ease-in-out hover:scale-105">
          <div className="text-[#0066b3] text-3xl md:text-4xl font-semibold">100+</div>
          <div className="text-black text-xl md:text-2xl font-semibold">Командалар саны</div>
        </Link>
        <Link to="/community/events" className="w-full md:w-[540px] px-6 py-8 bg-white rounded-xl shadow-lg border-4 border-[#0066b3] flex flex-col gap-4 text-center transform transition-transform duration-300 ease-in-out hover:scale-105">
          <div className="text-[#0066b3] text-3xl md:text-4xl font-semibold">5+</div>
          <div className="text-black text-xl md:text-2xl font-semibold">Жыл сайынғы жарыстар</div>
        </Link>
      </div>
    </div>
  );
}
