import React, { useEffect, useState } from 'react';

export default function SchemeRecommender({ field, data }) {
  const [schemes, setSchemes] = useState([]);

  useEffect(() => {
    if (!field || !data) {
      setSchemes([]);
      return;
    }

    // Simulated recommendation logic
    const recommended = [
      { field: 'agriculture', name: 'PM-KISAN Yojana' },
      { field: 'education', name: 'National Scholarship Portal' },
      { field: 'healthcare', name: 'Ayushman Bharat' }
    ].filter(scheme => scheme.field === field);

    setSchemes(recommended);
  }, [field, data]);

  return (
    <div className="recommendations">
      <h2>Recommended Schemes</h2>
      <ul>
        {schemes.map((scheme, index) => (
          <li key={index}>{scheme.name}</li>
        ))}
        {schemes.length === 0 && <li>No schemes to show.</li>}
      </ul>
    </div>
  );
}
