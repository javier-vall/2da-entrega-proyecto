import productServices from '../services/products.services.js';

import productModel from '../models/product.model.js';

const productsServices = new productServices(productModel);

export const getProducts = async (req, res) => {
  const { id } = req.params;

  if (id) {
    try {
      const product = await productsServices.getProductById(id);

      if (product) {
        res.status(200).send({ product });
      } else {
        res.send("El producto que se intenta buscar no existe.");
      }
    } catch (error) {
      console.log(error);
    }
  } else {
    try {
      const products = await productServices.getProducts();
      res.status(200).send(products);
    } catch (error) {
      console.log(error);
    }
  }
};
