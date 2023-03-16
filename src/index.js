const express = require('express');
const app = express();
const morgan = require('morgan');

//configuraciones
app.set('port', 3000);
app.set('json spaces', 2);

//Middlewares
app.use(morgan('dev'));
app.use(express.json());

//rutas
app.use('/api/juegos/1', require('./routes/rutas'));


//Empezando el servidor
app.listen(app.get('port'));
console.log("mi primer servidor");

