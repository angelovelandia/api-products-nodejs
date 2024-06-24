const express = require('express');

const productsRouter = require('../routes/products.router');

function routeApi(app){
  const router = express.Router();
  app.use('/api/v1', router);
  router.use('/products', productsRouter);
}

module.exports = routeApi;
