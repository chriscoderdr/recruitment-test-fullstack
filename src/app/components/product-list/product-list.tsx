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

  const [pause, setPause] = useState(false);

  const [direction, setDirection] = useState(-1);

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
    return itemRef.current == null ? 0 : itemRef.current.clientWidth + 16;
  };

  const getContainerWidth = () => {
    return containerRef.current == null ? 0 : containerRef.current.clientWidth;
  };

  const getItemsPerPage = () => {
    return getContainerWidth() / getItemWidth();
  };

  const totalOfPages = () => {
    return products.length / getItemsPerPage();
  };

  const updateOffset = (newOffset: number) => {
    let offset = newOffset;
    if (
      newOffset > getItemWidth() * getItemsPerPage() * (totalOfPages() - 1) ||
      newOffset < 0
    ) {
      offset = 0;
    }
    setOffset(offset);
  };

  useEffect(() => {
    const interval = setInterval(() => {
      if (!pause) {
        updateOffset(offset + getItemWidth());
      }
    }, 1600);

    return () => {
      if (interval) {
        clearInterval(interval);
      }
    };
  });

  const getItemPosition = (index: number) => {
    return offset * direction;
  };

  const onMouseOver = () => {
    setPause(true);
  };

  const onMouseLeave = () => {
    setPause(false);
  };

  const onMoveForward = () => {
    updateOffset(offset + getItemWidth());
  };

  const onMoveBackward = () => {
    updateOffset(offset - getItemWidth());
  };

  return (
    <div
      className={styles.product_list}
      ref={containerRef}
      onMouseOver={onMouseOver}
      onMouseLeave={onMouseLeave}
    >
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
      <div className={styles.controls}>
        <span
          className={`${styles.icon} ${styles.icon_backward}`}
          onClick={onMoveBackward}
        />
        <span
          className={`${styles.icon} ${styles.icon_forward}`}
          onClick={onMoveForward}
        />
      </div>
    </div>
  );
};
