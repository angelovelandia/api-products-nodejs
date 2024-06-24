const swaggerUi = require('swagger-ui-express')
const swaggerJsdoc = require('swagger-jsdoc')
const path = require('path')

const PORT = process.env.PORT;

const swaggerOptions = {
  swaggerDefinition:{
    info:{
      title: 'Ecommerce API avcodev',
      description:"This api has CRUD of products",
      version: "0.0.1"
    },
    servers: [
      {
        url: `http://localhost:${PORT}`
      }
    ]
  },
  apis: [`${path.join(__dirname, "../routes/*.js")}`]
}
const swaggerDocs = swaggerJsdoc(swaggerOptions);

function initSwagger(app){
  app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocs))
}

module.exports = initSwagger
