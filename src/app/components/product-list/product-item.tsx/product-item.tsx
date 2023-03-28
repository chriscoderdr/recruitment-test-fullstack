import { Product } from "@prisma/client";
import React, { CSSProperties, Ref } from "react";
import styles from "./product-item.module.css";

type IProductItemProps = {
  product: Product;
  style?: CSSProperties;
  className?: string;
};

export const ProductItem = React.forwardRef(
  (
    { product, style, className }: IProductItemProps,
    ref: Ref<HTMLDivElement>
  ) => {
    return (
      <div
        className={`${styles.product_item} ${className}`}
        style={style}
        ref={ref}
      >
        <img
          className={styles.product_image}
          src={"https://placehold.it/200x200"}
          alt="product image"
        />
        <p className={styles.product_name}>Name</p>
        <p className={styles.product_price}>12.0</p>
        <p className={styles.product_description}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur
          cursus eu sem ac commodo. Integer porttitor ullamcorper tristique.
        </p>
      </div>
    );
  }
);
