import { Product } from "@prisma/client";
import React, { CSSProperties, Ref } from "react";
import styles from "./product-item.module.css";

type IProductItemProps = {
  product?: Product;
  style?: CSSProperties;
  className?: string;
};

export const ProductItem = React.forwardRef(function ProductItem(
  { product, style, className }: IProductItemProps,
  ref: Ref<HTMLDivElement>
) {
  const excerptDescription = () => {
    if (product && product.description.length > 255) {
      return product.description.slice(0, 255) + '...';
    }
    return product?.description;
  };

  return (
    <div
      className={`${styles.product_item} ${className}`}
      style={style}
      ref={ref}
    >
      <img
        className={styles.product_image}
        src={product?.image}
        alt="product image"
      />
      <p className={styles.product_name}>{product?.name}</p>
      <p className={styles.product_price}>{product?.price + ""}</p>
      <p className={styles.product_description}>{excerptDescription()}</p>
    </div>
  );
});
