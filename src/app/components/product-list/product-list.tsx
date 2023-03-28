"use client";

import { Product } from "@prisma/client";
import styles from "./product-list.module.css";
import { ProductItem } from "./product-item.tsx/product-item";
import { useEffect, useRef, useState } from "react";
import { useWindowDimensions } from "@components/app/hooks/dimensions";

type IProductListProps = {
  products: Product[];
};

export const ProductList = ({ products }: IProductListProps) => {
  const [offset, setOffset] = useState(0);

  const containerRef = useRef<HTMLDivElement>(null);

  const itemRef = useRef<HTMLDivElement>(null);

  const [firstItem, setFirstItem] = useState<Product>();
  const [productList, setProductList] = useState<Product[]>();

  useEffect(() => {
    if (products.length > 0) {
      setFirstItem(products[0]);
      setProductList(products.slice(1, -1));
    }
  }, []);

  const getItemWidth = () => {
    return itemRef.current == null ? 0 : itemRef.current.clientWidth;
  };

  const updateOffset = (newOffset: number) => {
    let offset = newOffset;
    if (
      containerRef.current != null &&
      newOffset - getItemWidth() * (products.length - products.length / 2) >
        containerRef.current?.clientWidth
    ) {
      offset = 0;
    }
    setOffset(offset);
  };

  useEffect(() => {
    const interval = setInterval(() => {
      updateOffset(offset + getItemWidth() + 16);
    }, 1600);

    return () => {
      if (interval) {
        clearInterval(interval);
      }
    };
  });

  const getItemPosition = (index: number) => {
    return offset * -1;
  };

  return (
    <div className={styles.product_list} ref={containerRef}>
      {firstItem && (
        <ProductItem
          ref={itemRef}
          key={firstItem.id}
          product={firstItem}
          style={{
            transform: "translateX(" + getItemPosition(0) + "px)",
          }}
        />
      )}
      {productList &&
        productList.length > 0 &&
        productList.map((product, index) => (
          <ProductItem
            key={product.id}
            product={product}
            style={{
              transform: "translateX(" + getItemPosition(index + 1) + "px)",
            }}
          />
        ))}
    </div>
  );
};
