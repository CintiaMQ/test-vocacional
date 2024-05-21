// src/components/Test.jsx
import React from 'react';

function Test({ questions, onAnswer }) {
  return (
    <div>
      <h1>Vocational Test</h1>
      {questions.map((question, index) => (
        <div key={index}>
          <p>{question.text}</p>
          {question.options.map((option, i) => (
            <button key={i} onClick={() => onAnswer(index, option)}>{option}</button>
          ))}
        </div>
      ))}
    </div>
  );
}

export default Test;
