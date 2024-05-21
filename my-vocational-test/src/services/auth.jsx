export async function register(email, password, role) {
  const response = await fetch('/api/register', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ email, password, role }),
  });

  if (!response.ok) {
    throw new Error('Failed to register');
  }

  return await response.json();
}

export async function login(email, password) {
  const response = await fetch('/api/login', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ email, password }),
  });

  if (!response.ok) {
    const errorText = await response.text(); // Obtener el texto de error de la respuesta
    throw new Error(`Failed to login: ${errorText}`); // Incluir el texto de error en el mensaje de excepción
  }

  return await response.json();
}
