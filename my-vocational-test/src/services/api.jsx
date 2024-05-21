// src/services/api.js
export async function submitAnswers(answers) {
    // Implementa la lógica para enviar las respuestas al servidor y obtener los resultados
    const response = await fetch('/api/submit', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ answers }),
    });
    return await response.json();
  }
  
  export async function getResults() {
    // Implementa la lógica para obtener los resultados del servidor
    const response = await fetch('/api/results');
    return await response.json();
  }
  