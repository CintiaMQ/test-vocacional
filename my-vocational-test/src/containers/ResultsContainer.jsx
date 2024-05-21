// src/containers/ResultsContainer.jsx
import React, { useEffect, useState } from 'react';
import Results from '../components/Results';
import { getResults } from '../services/api';

function ResultsContainer() {
  const [careers, setCareers] = useState([]);
  const [videos, setVideos] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const data = await getResults();
      setCareers(data.careers);
      setVideos(data.videos);
    }
    fetchData();
  }, []);

  return <Results careers={careers} videos={videos} />;
}

export default ResultsContainer;
