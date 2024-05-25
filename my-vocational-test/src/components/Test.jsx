import React, { useState, useEffect } from "react";
import questions from "../questions.json";

const Test = () => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [answers, setAnswers] = useState([]);

  const handleAnswer = (answer) => {
    setAnswers([...answers, answer]);
    setCurrentQuestion(currentQuestion + 1);
  };

  if (currentQuestion >= questions.length) {
    return <div>Test completado. Gracias por participar.</div>;
  }

  return (
    <div>
      <h1>{questions[currentQuestion].question}</h1>
      {questions[currentQuestion].options.map((option, index) => (
        <button key={index} onClick={() => handleAnswer(option)}>
          {option}
        </button>
      ))}
    </div>
  );
};

export default Test;
