const express = require('express');
const router = express.Router();

const ProductsService = require('../services/products.service');
const validatorHandler = require('../middlewares/validator.handler');
const { createProductSchema, updateProductSchema, getProductSchema } = require('../schemas/product.schema');

const service = new ProductsService();

/**
 * @swagger
 * /:
 *   get:
 *     description: Get all products
 *     responses:
 *       200:
 *         description: Return all products.
 */
router.get('/', async(req, res, next) => {
  try {
    const products = await service.find();
    res.json(products);
  } catch (error) {
    next(error);
  }
});

router.get('/:id',
  validatorHandler(getProductSchema, 'params'),
  async(req, res, next) => {
    try {
      const { id } = req.params;
      const product = await service.findOne(id);
      res.json(product);
    } catch (error) {
      next(error);
    }

  });

router.post('/create',
  validatorHandler(createProductSchema, 'body'),
  async(req, res) => {
    const { name, price, image } = req.body;
    const response = await service.create({ name, price, image });
    res.status(201).json({
      message: 'Product created',
      product: response
    });
  });

router.patch('/:id',
  validatorHandler(getProductSchema, 'params'),
  validatorHandler(updateProductSchema, 'body'),
  async(req, res, next) => {
    try {
      const { id } = req.params;
      let data = req.body;
      const response = await service.update(id, data);
      res.json({
        message: 'Product updated',
        product: response
      });
    } catch (error) {
      next(error);
    }
  });

router.delete('/:id',
  validatorHandler(getProductSchema, 'params'),
  async(req, res) => {
    const { id } = req.params;
    const response = await service.delete(id);
    res.json({
      message: 'Product eliminated',
      product_id: response
    });
  });


module.exports = router;
