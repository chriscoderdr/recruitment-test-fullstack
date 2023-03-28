import { Product } from "@prisma/client";
import styles from "./product-list.module.css";
import { ProductItem } from "./product-item.tsx/product-item";

type IProductListProps = {
  products: Product[];
};

export const ProductList = ({ products }: IProductListProps) => {
  return (
    <div className={styles.product_list}>
      {products &&
        products.length > 0 &&
        products.map((product) => (
          <ProductItem key={product.id} product={product} />
        ))}
    </div>
  );
};
