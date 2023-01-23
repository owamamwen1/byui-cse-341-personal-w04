const swaggerAutogen = require('swagger-autogen')();

const doc = {
  info: {
    title: 'Simple API',
    description: 'Contacts API'
  },
  host: 'cse341-personal-w04.onrender.com',
  schemes: ['https']
};

const outputFile = './swagger.json';
const endpointsFiles = ['./routes/index.js'];

// generate swagger.json
swaggerAutogen(outputFile, endpointsFiles, doc);