// src/components/Results.jsx
import React from 'react';

function Results({ careers, videos }) {
  return (
    <div>
      <h1>Test Results</h1>
      <h2>Recommended Careers</h2>
      <ul>
        {careers.map((career, index) => (
          <li key={index}>{career}</li>
        ))}
      </ul>
      <h2>Related Videos</h2>
      <div>
        {videos.map((video, index) => (
          <div key={index}>
            <h3>{video.title}</h3>
            <iframe src={video.url} title={video.title}></iframe>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Results;