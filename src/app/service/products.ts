import { Product } from "@prisma/client";
import { CreateProductEntity, DogBreed } from "../models/models";

export const getProducts = async (): Promise<Product[] | undefined> => {
  const resp = await fetch("http://localhost:3000/api/store/products", {
    method: "get",
  });
  try {
    const data = await resp.json();
    console.log(data);
    return data.data;
  } catch (e) {
    console.error(e);
  }
};

export const createProduct = async (
  product: CreateProductEntity
): Promise<Product> => {
  const formData = new FormData();
  Object.entries(product).forEach((entry) => {
    formData.append(entry[0], entry[1] as string);
  });
  const resp = await fetch("http://localhost:3000/api/store/product", {
    method: "put",
    body: formData,
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
