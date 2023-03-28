import { Product } from "@prisma/client";
import { DogBreed } from "../models/models";

export const getProducts = async (): Promise<Product[] | undefined> => {
  const resp = await fetch("http://localhost:3000/api/store/products", {
    method: "get",
  });
  try {
    const data = await resp.json();
    console.log(data);
    return data.data;
  } catch(e) {
    console.error(e);
  }
};

export const productsService = {
  getProducts,
};
