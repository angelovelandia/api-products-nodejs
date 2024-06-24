require('dotenv').config()

const cors = require('cors')
const express = require("express")
const app = express()

app.use(express.json())
app.use(cors())

const routeApi = require('./routes/index')
const { logErrors, errorHandler, boomErrorHandler } = require('./middlewares/error.handler')
const initSwagger = require('./swaggerui/swagger.ui')

const PORT = process.env.PORT;

app.get('/', (req, res) => {
  res.send(`La API v1 funcionando correctamente en: http://localhost:${PORT}`);
});

routeApi(app)
initSwagger(app)

app.use(logErrors)
app.use(boomErrorHandler)
app.use(errorHandler)

app.listen(PORT, ()=> {
  console.log(`La API v1 funcionando correctamente en: http://localhost:${PORT}`);
})
