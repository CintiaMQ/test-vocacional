require('dotenv').config(); // Cargar las variables de entorno desde el archivo .env
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors'); // Importa cors
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const User = require('./models/User'); // Modelo de usuario de MongoDB

const app = express();
const PORT = process.env.PORT || 5000;

// Usa cors para permitir solicitudes desde cualquier origen
app.use(cors());

// Middleware para parsear JSON
app.use(express.json()); 

// Conectar a MongoDB Atlas usando la URI de las variables de entorno
const mongoURI = process.env.MONGO_URI;

if (!mongoURI) {
  console.error('No MongoDB URI specified in .env file');
  process.exit(1); // Terminar el proceso si no se encuentra la URI
}

mongoose.connect(mongoURI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log('MongoDB connected...'))
  .catch(err => console.error('MongoDB connection error:', err));

// Ruta para la raíz "/"
app.get('/', (req, res) => {
  res.send('Bienvenido a la API de Registro de Usuarios');
});

// Ruta para registrar un usuario
app.post('/api/register', async (req, res) => {
  const { email, password, role, name, surname, age, educationLevel, acceptTerms } = req.body;
  try {
    if (role === "user" && (!name || !surname || !age || !educationLevel || !acceptTerms)) {
      return res.status(400).json({ message: 'All fields are required for user registration' });
    }

    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);
    const newUser = new User({ email, password: hashedPassword, role, name, surname, age, educationLevel, acceptTerms });
    await newUser.save();
    res.status(200).json({ message: 'User registered successfully' });
  } catch (err) {
    res.status(500).json({ message: 'Failed to register user', error: err.message });
  }
});

// Ruta para iniciar sesión
app.post('/api/login', async (req, res) => {
  const { email, password } = req.body;
  console.log(`Login attempt for email: ${email}`);

  try {
    const user = await User.findOne({ email });
    if (!user) {
      console.log('User not found');
      return res.status(400).json({ message: 'Invalid credentials' });
    }

    const validPassword = await bcrypt.compare(password, user.password);
    if (!validPassword) {
      console.log('Invalid password');
      return res.status(400).json({ message: 'Invalid credentials' });
    }

    const token = jwt.sign({ id: user._id, role: user.role, userName: user.name }, process.env.JWT_SECRET, { expiresIn: '1h' });
    res.json({ token });
  } catch (err) {
    console.error('Login error:', err);
    res.status(500).json({ message: 'Failed to login', error: err.message });
  }
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
