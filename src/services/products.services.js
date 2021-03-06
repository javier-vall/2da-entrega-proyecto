import Services from "./crud.services";

class Products extends Services {
  constructor(model) {
    super(model);
  }

  getProducts = async () => await this.getAll();
  getProductById = async (id) => await this.getById(id);
  createProduct = async () => await this.createDocument(product);
  deleteProductById = async (id) => await this.deleteById(id);

  updateProductById = async (id, product) => {
    const { title, description, price, stock, thumbnail } = product;

    try {
      await this.model.findByIdAndUpdate(id, {
        title,
        description,
        price,
        stock,
        thumbnail,
      });
      const updated = await this.getProductById(id);
      return updated;
    } catch (error) {
      console.log(error);
    }
  };
}