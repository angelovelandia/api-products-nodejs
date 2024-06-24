const faker = require('faker')
const boom = require('@hapi/boom')

class ProductsService {

  constructor(){
    this.products = []
    this.generate()
  }

  generate(){
    const limit = 100;
    for (let i = 0; i < limit; i++) {
      this.products.push({
        id: faker.datatype.uuid(),
        name: faker.commerce.productName(),
        price: parseInt(faker.commerce.price()),
        image: faker.image.imageUrl(),
        isBlock: faker.datatype.boolean()
      })
    }
  }
  create({ name, price, image }){
    let product = {
      id: faker.datatype.uuid(),
      name,
      price,
      image
    }
    this.products.push(product);
    return product
  }
  async find(){
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve(this.products)
      }, 1000)
    })
  }
  async findOne(id){
    let product = this.products.find(item => item.id === id)
    if(!product) throw boom.notFound("Product not found")
    if(product.isBlock) throw boom.conflict("Product blocked")
    return product
  }
  async update(id, data){
    const index = this.products.findIndex(item => item.id === id)
    if(index === -1) throw boom.notFound("Product not found")
    const product = this.products[index];
    this.products[index] = {
      ...product,
      ...data
    }
    return this.products[index]
  }
  async delete(id){
    const index = this.products.findIndex(item => item.id === id)
    this.products.splice(index, 1)
    return id
  }
}

module.exports = ProductsService
