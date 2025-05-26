import React, { useEffect, useState } from 'react';
import axios from 'axios';

function ViewSubmissions() {
  const [submissions, setSubmissions] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const res = await axios.get('http://localhost:5000/api/submissions');
      setSubmissions(res.data);
    };
    fetchData();
  }, []);

  return (
    <div style={{ padding: '2rem' }}>
      <h2>Submitted Products</h2>
      {submissions.length === 0 ? (
        <p>No submissions yet.</p>
      ) : (
        <ul>
          {submissions.map((entry, index) => (
            <li key={index}>
              <strong>Product Name:</strong> {entry.productName}, <strong>Product Cost:</strong> {entry.productCost}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default ViewSubmissions;
