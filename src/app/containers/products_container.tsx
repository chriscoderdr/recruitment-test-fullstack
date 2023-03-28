"use client";

import { Product } from "@prisma/client";
import { ProductCarousel } from "../components/product-carousel/product-carousel";

import { productsService } from "@app/service/products";
import { useEffect, useState } from "react";

export const ProductsContainer = () => {
  const [products, setProducts] = useState<Product[]>();

  useEffect(() => {
    productsService.getProducts().then((resp) => {
      if (resp) {
        setProducts(resp);
      }
    });
  }, []);

  return <>{products && <ProductCarousel products={products} />}</>;
};
