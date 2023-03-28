import { Product } from "@prisma/client";
import { CreateProductEntity, DogBreed } from "../models/models";

export const getProducts = async (): Promise<Product[] | undefined> => {
  const resp = await fetch("http://localhost:3000/api/store/products", {
    method: "get",
  });
  try {
    const data = await resp.json();
    return data.data;
  } catch (e) {
    console.error(e);
  }
};

export const createProduct = async (
  product: CreateProductEntity
): Promise<Product> => {
  const formData = new FormData();
  formData.append("name", product.name);
  formData.append("description", product.description);
  formData.append("price", product.price + "");
  formData.append("image", product.image);
  const resp = await fetch("http://localhost:3000/api/store/product", {
    method: "put",
    body: formData
  });
  try {
    const data = await resp.json();
    console.log(data);
    return data.data;
  } catch (e) {
    console.error(e);
  }
};

export const productsService = {
  getProducts,
  createProduct,
};
