const swaggerAutogen = require('swagger-autogen')();

const doc = {
    info: {
        version: "1.0.0",
        title: "Contact API",
        description: "API for managing contacts"
    },
    host: "localhost:3000",
    schemes: ["http", "https"]
};

const outputFile = "./swagger.json";
const endpointsFiles = ["./routes/index.js"];

//generate swagger.json
swaggerAutogen(outputFile, endpointsFiles, doc);
