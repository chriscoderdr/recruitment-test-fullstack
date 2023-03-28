"use client";

import { Product } from "@prisma/client";
import styles from "./product-list.module.css";
import { ProductItem } from "./product-item.tsx/product-item";
import { useEffect, useState } from "react";
import { useWindowDimensions } from "@components/app/hooks/dimensions";

type IProductListProps = {
  products: Product[];
};

export const ProductList = ({ products }: IProductListProps) => {
  const [offset, setOffset] = useState(0);

  const { width, height } = useWindowDimensions();

  const updateOffset = (newOffset: number) => {
    let offset = newOffset;
    if ((newOffset + (250 * 2)) > width) {
      offset = 0;
    }
    setOffset(offset);
  };

  useEffect(() => {
    const interval = setInterval(() => {
      updateOffset(offset + 250);
    }, 1000);

    return () => {
      if (interval) {
        clearInterval(interval);
      }
    };
  });

  const getItemPosition = (index: number) => {
    return -offset;
  };

  return (
    <div className={styles.product_list}>
      {products &&
        products.length > 0 &&
        products.map((product, index) => (
          <ProductItem
            key={product.id}
            product={product}
            style={{
              transform: "translateX(" + getItemPosition(index) + "px)",
            }}
          />
        ))}
    </div>
  );
};
