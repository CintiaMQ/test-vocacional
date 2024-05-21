import React, { useState } from 'react';
import Test from '../components/Test';
import { submitAnswers } from '../services/api';
import { useNavigate } from 'react-router-dom'; // Cambiar useHistory por useNavigate

function TestContainer() {
  const [answers, setAnswers] = useState([]);
  const navigate = useNavigate(); // Cambiar useHistory por useNavigate

  const questions = [
    { text: 'Question 1', options: ['Option 1', 'Option 2'] },
    { text: 'Question 2', options: ['Option 3', 'Option 4'] },
    // Añade más preguntas según sea necesario
  ];

  const handleAnswer = (questionIndex, option) => {
    const newAnswers = [...answers];
    newAnswers[questionIndex] = option;
    setAnswers(newAnswers);
  };

  const handleSubmit = async () => {
    await submitAnswers(answers);
    navigate('/results'); // Cambiar history.push por navigate
  };

  return (
    <div>
      <Test questions={questions} onAnswer={handleAnswer} />
      <button onClick={handleSubmit}>Submit Test</button>
    </div>
  );
}

export default TestContainer;
