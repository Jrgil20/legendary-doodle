// Importa el módulo Express. Esto te permite usar la funcionalidad de Express en tu archivo.
const express = require('express');
// Importa el módulo Multer. Esto te permite manejar archivos subidos por el usuario.
const multer  = require('multer');
// Importa el módulo Path. Esto te permite trabajar con rutas de archivos y directorios.

const path = require('path');

const storage = multer.diskStorage({
  destination: function(req, file, cb) {
    cb(null, 'uploads/')
  },
  filename: function(req, file, cb) {
    cb(null, file.fieldname + '-' + Date.now() + path.extname(file.originalname))
  }
})

const upload = multer({ storage: storage });

// Crea una nueva aplicación Express. Esto es lo que realmente maneja las solicitudes y respuestas.
const app = express();

// Middleware para servir archivos estáticos
app.use(express.static('public'));

app.post('/upload', upload.array('file'), function (req, res, next) {
  // req.files is array of `images` files
  // req.body will contain the text fields, if there were any
  res.json({status: 'OK'});
});

// Define el puerto en el que se ejecutará tu servidor.
const port = 3000;

// Define una ruta GET para la ruta raíz ("/"). Cuando alguien visita esta ruta, la función de devolución de llamada se ejecuta.
// La función de devolución de llamada toma dos argumentos: un objeto de solicitud (que contiene información sobre la solicitud) y un objeto de respuesta (que se utiliza para enviar la respuesta).
app.get('/', (req, res) => {
  // Envía la respuesta "Hola Mundo!".
  res.send('Servidor de prueba JR');
});

// Inicia el servidor en el puerto especificado. Una vez que el servidor está en marcha, se ejecuta la función de devolución de llamada.
app.listen(port, () => {
  // Imprime un mensaje en la consola para que sepas que el servidor está en marcha.
  console.log(`Servidor corriendo en http://localhost:${port}`);
});