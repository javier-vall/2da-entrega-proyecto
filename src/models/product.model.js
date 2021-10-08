import mongoose from "mongoose";

export const productSchema = new mongoose.Schema(
  {
    title: String,
    description: String,
    price: Number,
    stock: Number,
    thumbnail: String,
  },
  { timestamps: true }
);

export const productModel = mongoose.model("Product", productSchema);
