import { Router } from "express";

import { productsControllers } from "../controllers/index.js";

const productsRouter = Router();

productsRouter.get("/:id", productsControllers.getProducts);
// productsRouter.post("/", productsControllers.saveProduct);
// productsRouter.delete("/:id", productsControllers.deleteProduct);
// productsRouter.put("/:id", productsControllers.updateProduct);

export default productsRouter;
