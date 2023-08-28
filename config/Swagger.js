// swagger.js
import swaggerJSDoc from "swagger-jsdoc";
import { fileURLToPath } from 'url';
import path from 'path';
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

//Definition of swagger options
const options = {
  definition: {
    components: {},

    info: {
      title: 'api-sigecor',
      version: '1.0.0',
      description: "",
    },
    securityDefinitions: {
      bearerAuth: {
        type: "apiKey",
        name: "token",
        scheme: "bearer",
        bearerFormat: "JWT",
        in: "header",
      },
    },
    security: {
      bearerAuth: [],
    },
    //Se definen los servidores con los que vamos a trabajar segun el ambiente que se maneje
    servers:[ {
    //define varios servidores
        //definir la url, puerto o dominio de desarrollo
      url: "http://localhost:{port}/api/sigecor",
      description: "The production API server",
      variables: {
        'port': {
            'enum': [
                '3000',
                '4000',
                '5000',
                '6000',
                '7000'
            ],
            'default': '3000'
        }
      }
    }]
  },
  apis: [
    // Define para los esquemas de swagger
    path.join(__dirname, '../docs/schemas/*.js'),
    // Define la ruta de este proyecto para leer swagger
    path.join(__dirname, '../docs/tags/*.docs.js')
  ],
};

const specs = swaggerJSDoc(options);

export default specs;