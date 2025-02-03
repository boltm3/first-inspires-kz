// src/pages/NotFound.tsx
const NotFound = () => {
    return (
      <div className="flex justify-center items-center py-28 bg-gray-100">
        <div className="text-center p-8 bg-white rounded-lg shadow-lg max-w-sm w-full">
          <h1 className="text-4xl font-extrabold text-red-500 mb-4">404</h1>
          <p className="text-lg text-gray-700 mb-4">Page Not Found</p>
          <p className="text-gray-600">Sorry, the page you're looking for does not exist.</p>
        </div>
      </div>
    );
  };
  
  export default NotFound;
  