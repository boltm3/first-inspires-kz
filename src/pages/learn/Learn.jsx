import { Link } from "react-router-dom";

function Learn() {
  return (
    <div className="pt-16 px-4">
      {/* Header Section */}
      <header className="text-center mb-8">
        <h3 className="text-4xl font-bold text-gray-800 mb-4">
        Оқу ресурстары
        </h3>
        <p className="text-lg text-gray-600">
        FIRST Tech Challenge (FTC)-де үздік болу үшін қадамдық оқулықтар мен нұсқаулықтарды пайдаланып, ресурстарды зерттеңіз.
        </p>
      </header>

      {/* Call-to-Action Section */}
      <section className="flex justify-center gap-6 mt-8 flex-col sm:flex-row items-center">
        <Link
          to="/learn/video" // Route you want to navigate to
          className="bg-green-500 hover:bg-green-600 text-white py-4 px-8 text-lg rounded-lg shadow-md transition-transform hover:scale-105"
        >
          Видеолар
        </Link>
        <a
          href="https://darkhans-organization.gitbook.io/gm0"
          className="bg-blue-500 hover:bg-blue-600 text-white py-4 px-8 text-lg rounded-lg shadow-md transition-transform hover:scale-105"
          target="_blank"  // Opens the link in a new tab
          rel="noopener noreferrer"  // Security best practices when using target="_blank",lol
        >
          Документация
        </a>


      </section>

      {/* Information Section */}
      <section className="mt-12 mx-5 md:mx-14 lg:mx-24 text-center text-gray-700">
      <p className="mb-4">  
  Оқулықтар үшін видеоларды немесе егжей-тегжейлі нұсқаулықтар үшін құжаттарды таңдаңыз.  
  Өз жолыңызбен үйреніп, FTC-де жетістікке жетіңіз!  
</p>  

      </section>
    </div>
  );
}

export default Learn;
