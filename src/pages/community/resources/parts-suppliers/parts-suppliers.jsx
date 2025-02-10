import { useEffect, useState } from "react";

const PartsSuppliers = () => {
  const [partsSuppliers, setPartsSuppliers] = useState([]);

  useEffect(() => {
    fetch("/partsSuppliers.json") // 读取 public 目录下的 JSON
      .then((response) => response.json())
      .then((data) => setPartsSuppliers(data))
      .catch((error) => console.error("Error fetching parts suppliers:", error));
  }, []);

  const handleCardClick = (url) => {
    window.open(url, "_blank"); // 打开新的页面
  };

  return (
    <div className="p-8">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {partsSuppliers.map((supplier, index) => (
         <div
         key={index}
         className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow cursor-pointer"
         onClick={() => handleCardClick(supplier.link)}
       >
         <img
           src={supplier.image}
           alt={`${supplier.name} logo`}
           className="w-full h-48 object-cover"
         />
         <div className="p-6 text-center">
           <h3 className="text-xl font-bold mb-2 text-gray-900">{supplier.name}</h3>
           <p className="text-gray-600 mb-3">{supplier.description}</p>
         </div>
       </div>
       
        ))}
      </div>
    </div>
  );
};

export default PartsSuppliers;
