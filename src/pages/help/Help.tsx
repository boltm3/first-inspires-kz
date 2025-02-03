
function Help() {
  return (
    <div className="p-8 bg-gray-50">
      {/* Header Section */}
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-3xl font-extrabold text-gray-800">
          How Can We Help?
        </h2>
      </div>

      {/* Introduction Section */}
      <div className="bg-white rounded-lg shadow p-6 mb-8">
        <p className="text-gray-700 text-lg leading-relaxed">
          Whether you need guidance navigating the platform or have feedback to
          share, we’re here to assist you. Explore our resources below or reach
          out directly for help.
        </p>
      </div>

      {/* Main Content Section */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Help Center */}
        <div className="bg-white p-6 rounded-lg shadow hover:shadow-lg transition-all">
          <h4 className="text-lg font-semibold text-gray-800 mb-2">
            Help Center
          </h4>
          <p className="text-gray-700">
            Access FAQs, troubleshooting tips, and guides to solve common
            issues.
          </p>
        </div>

        {/* Contact Support */}
        <div className="bg-white p-6 rounded-lg shadow hover:shadow-lg transition-all">
          <h4 className="text-lg font-semibold text-gray-800 mb-2">
            Contact Support
          </h4>
          <p className="text-gray-700">
            Get direct assistance from our support team for technical or account
            issues.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Help;
