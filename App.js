import express from 'express'
import dotenv from 'dotenv';
import morgan from 'morgan';
import swaggerUi from 'swagger-ui-express';
import specs from './config/Swagger.js';
import router from './src/routes/initRoutes.js'
import initModels from './src/models/initModels.js'
const app = express();

// Se cargan las variables de entorno dependiendo del entorno
dotenv.config({path: `./deploy/.env.${process.env.NODE_ENV}`});

// Se inicia el morgan
app.use(morgan('dev'));

// Configuraciones del servidor
app.use(express.json({limit: '10mb'}));
app.use(express.urlencoded({ extended: true, limit: '10mb' }));

// Rutas  
app.use("/api/sigecor", router);

// Configuraciones del swagger
app.use("/docs", swaggerUi.serve, swaggerUi.setup(specs, { parameterLimit: 100000 }));

// Crea los modelos en la base de datos
await initModels;

app.listen(process.env.PORT, async () => {
    console.log('SERVIDOR CORRIENDO EN EL PUERTO: ' + process.env.PORT);
});