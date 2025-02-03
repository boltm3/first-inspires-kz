import { Link } from "react-router-dom";

function Learn() {
  return (
    <div className="pt-16 px-4">
      {/* Header Section */}
      <header className="text-center mb-8">
        <h3 className="text-4xl font-bold text-gray-800 mb-4">
          Learning Resources
        </h3>
        <p className="text-lg text-gray-600">
          Explore resources to excel in the FIRST Tech Challenge (FTC) with
          step-by-step tutorials and guides.
        </p>
      </header>

      {/* Call-to-Action Section */}
      <section className="flex justify-center gap-6 mt-8 flex-col sm:flex-row items-center">
        <Link
          to="/learn/video" // Route you want to navigate to
          className="bg-green-500 hover:bg-green-600 text-white py-4 px-8 text-lg rounded-lg shadow-md transition-transform hover:scale-105"
        >
          Videos
        </Link>
        <Link
          to="/learn/document"
          className="bg-blue-500 hover:bg-blue-600 text-white py-4 px-8 text-lg rounded-lg shadow-md transition-transform hover:scale-105"
        >
          Documents
        </Link>
      </section>

      {/* Information Section */}
      <section className="mt-12 text-center text-gray-700">
        <p className="mb-4">
          Choose videos for tutorials or documents for detailed guides. Learn
          your way and succeed in FTC!
        </p>
      </section>
    </div>
  );
}

export default Learn;
