import React, { useState, useEffect } from 'react';
import axios from 'axios';

const TestResults = () => {
  const [results, setResults] = useState([]);

  useEffect(() => {
    const fetchResults = async () => {
      try {
        const response = await axios.get('http://localhost:5000/api/test-results');
        setResults(response.data);
      } catch (error) {
        console.error('Error fetching test results:', error);
      }
    };
    fetchResults();
  }, []);

  return (
    <div className="bg-gray-800 p-6 rounded-lg shadow">
      <h2 className="text-2xl font-semibold mb-4">Test Results</h2>
      <p>Review and analyze test results submitted by users.</p>
      <table className="w-full mt-4 text-left">
        <thead>
          <tr>
            <th className="border-b-2 border-gray-600 py-2">User</th>
            <th className="border-b-2 border-gray-600 py-2">Score</th>
            <th className="border-b-2 border-gray-600 py-2">Date</th>
          </tr>
        </thead>
        <tbody>
          {results.map((result) => (
            <tr key={result._id}>
              <td className="border-b border-gray-700 py-2">{result.user}</td>
              <td className="border-b border-gray-700 py-2">{result.score}</td>
              <td className="border-b border-gray-700 py-2">{new Date(result.date).toLocaleDateString()}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default TestResults;
