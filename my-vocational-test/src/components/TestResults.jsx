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
    <div>
      <h1>Test Results</h1>
      <ul>
        {results.map(result => (
          <li key={result._id}>User ID: {result.userId} - Score: {result.score}</li>
        ))}
      </ul>
    </div>
  );
};

export default TestResults;
