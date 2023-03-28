"use client";

import { Product } from "@prisma/client";
import styles from "./product-carousel.module.css";
import { ProductItem } from "@components/product-item/product-item";
import { useEffect, useState } from "react";
import { Carousel } from "../carousel/carousel";

type IProductListProps = {
  products: Product[];
};

export const ProductCarousel = ({ products }: IProductListProps) => {
  const [firstItem, setFirstItem] = useState<Product>();
  const [productList, setProductList] = useState<Product[]>();

  useEffect(() => {
    if (products.length > 0) {
      setFirstItem(products[0]);
      setProductList(products.slice(1, products.length));
    }
  }, []);

  return (
    <>
      {firstItem && productList && productList?.length > 0 && (
        <Carousel
          gap={16}
          firstElement={() => (
            <ProductItem key={firstItem.id} product={firstItem} />
          )}
        >
          {productList &&
            productList.length > 0 &&
            productList.map((product, index) => (
              <ProductItem key={product.id} product={product} />
            ))}
        </Carousel>
      )}
    </>
  );
};
