const express = require('express');
const multer = require('multer');
const bodyParser = require('body-parser');
const mongoose = require('mongoose'); // Importar Mongoose
const path = require('path');

const app = express();
const PORT = 3000;

// Middleware para servir archivos estáticos desde la carpeta "public"
app.use(express.static(path.join(__dirname, 'public')));

// ** 1. Conectar a la base de datos MongoDB **
mongoose.connect('mongodb://127.0.0.1:27017/registroPSMs')
  .then(() => console.log('Conexión a MongoDB exitosa'))
  .catch(err => console.error('Error conectando a MongoDB:', err));

// ** 2. Crear un esquema con Mongoose **
const registroSchema = new mongoose.Schema({
  nombre: String,
  apellido: String,
  email: String,
  telefono: String,
  fechaNacimiento: Date,
  residencia: String,
  idiomas: String,
  referencia: String,
  valoraApp: String,
  foto: String,   // Ruta del archivo subido
  titulo: String, // Ruta del archivo subido
});

const Registro = mongoose.model('Registro', registroSchema); // Crear el modelo

// ** 3. Configurar almacenamiento para los archivos subidos **
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, 'uploads/'); // Carpeta donde se guardarán los archivos
  },
  filename: (req, file, cb) => {
    const uniqueSuffix = `${Date.now()}-${file.originalname}`;
    cb(null, uniqueSuffix); // Nombre único para cada archivo
  },
});

const upload = multer({ storage });

// ** 4. Middlewares para datos en JSON y formularios **
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// ** 6. Rutas **
// Ruta principal
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'formulario.html'));
});

// Ruta para manejar el formulario y guardar datos en MongoDB
app.post('/submit', upload.fields([
  { name: 'foto', maxCount: 1 }, // Campo para la foto de perfil
  { name: 'titulo', maxCount: 1 }, // Campo para el título o certificado
]), async (req, res) => {
  try {
    const formData = req.body;
    const fotoPath = req.files['foto'] ? req.files['foto'][0].path : null;
    const tituloPath = req.files['titulo'] ? req.files['titulo'][0].path : null;

    const nuevoRegistro = new Registro({
      nombre: formData.nombre,
      apellido: formData.apellido,
      email: formData.email,
      telefono: formData.telefono,
      fechaNacimiento: formData['fecha-nacimiento'],
      residencia: formData.residencia,
      idiomas: formData.idiomas,
      referencia: formData.referencia,
      valoraApp: formData['valora-app'],
      foto: fotoPath,
      titulo: tituloPath,
    });

    await nuevoRegistro.save();
    console.log('Datos guardados en MongoDB:', nuevoRegistro);
    res.send('Formulario recibido y datos guardados en la base de datos.');
  } catch (err) {
    console.error('Error al guardar los datos:', err);
    res.status(500).send('Error al procesar el formulario.');
  }
});

// ** 7. Iniciar el servidor **
app.listen(PORT, () => {
  console.log(`Servidor corriendo en http://localhost:${PORT}`);
});
