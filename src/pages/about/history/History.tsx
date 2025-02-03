import React from 'react';

const History = () => {
  return (
    <div className="p-8">
      <h3 className="text-3xl font-semibold text-center mb-4">Our History</h3>
      <p className="text-lg text-center text-gray-600 mb-8">
        Tracing our legacy from a single idea to a global movement.
      </p>

      <div className="mt-8">
        <h5 className="text-2xl font-semibold mb-4">Milestones of FIRST</h5>
        <ul className="list-disc pl-5 space-y-2">
          <li><strong>1989:</strong> Dean Kamen founded FIRST.</li>
          <li><strong>1992:</strong> FIRST Robotics Competition (FRC) launched.</li>
          <li><strong>1998:</strong> FIRST LEGO League (FLL) introduced for K-8 students.</li>
          <li><strong>2005:</strong> FIRST Tech Challenge (FTC) introduced for grades 7-12.</li>
          <li><strong>2020:</strong> Global teams surpass 30,000.</li>
        </ul>
      </div>

      <div className="mt-8">
        <h5 className="text-2xl font-semibold mb-4">FIRST in Numbers</h5>
        <ul className="list-disc pl-5 space-y-2">
          <li>Global Team Count</li>
          <li>Students Participating Annually</li>
          <li>Graduates Entering STEM Fields</li>
        </ul>
      </div>
    </div>
  );
};

export default History;
