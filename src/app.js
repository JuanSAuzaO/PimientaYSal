// Módulos
const express = require('express');
const app = express();
const router = require("./routes/mainRouter")
const path = require('path')
// Acá falta uno... 😇

// Configuración
app.use(express.static(path.join(__dirname, '../public')));
app.set('view engine', 'ejs')

// Rutas
// Acá falta el archivo de rutas y después las vistas de EJS
app.use('/', router);

app.listen(3000, () => { console.log('Servidor arriba en el puerto 3000 🤓👌');})