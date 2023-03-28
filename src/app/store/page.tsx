import { Product } from "@prisma/client";
import { Decimal } from "@prisma/client/runtime";
import { ProductList } from "../components/product-list/product-list";
import styles from "./page.module.css";

const Store = () => {
  const products: Product[] = [
    {
      id: 1,
      authorId: 2,
      name: "Something",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur cursus eu sem ac commodo. Integer porttitor ullamcorper tristique. Proin et ligula eu velit tincidunt bibendum sit amet et mauris. ",
      image: "https://placehold.it/500x500",
      price: new Decimal(9.99),
    },
    {
        id: 1,
        authorId: 2,
        name: "Something",
        description:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur cursus eu sem ac commodo. Integer porttitor ullamcorper tristique. Proin et ligula eu velit tincidunt bibendum sit amet et mauris. ",
        image: "https://placehold.it/500x500",
        price: new Decimal(9.99),
      },
      {
        id: 1,
        authorId: 2,
        name: "Something",
        description:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur cursus eu sem ac commodo. Integer porttitor ullamcorper tristique. Proin et ligula eu velit tincidunt bibendum sit amet et mauris. ",
        image: "https://placehold.it/500x500",
        price: new Decimal(9.99),
      },
      {
        id: 1,
        authorId: 2,
        name: "Something",
        description:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur cursus eu sem ac commodo. Integer porttitor ullamcorper tristique. Proin et ligula eu velit tincidunt bibendum sit amet et mauris. ",
        image: "https://placehold.it/500x500",
        price: new Decimal(9.99),
      },
      {
        id: 1,
        authorId: 2,
        name: "Something",
        description:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur cursus eu sem ac commodo. Integer porttitor ullamcorper tristique. Proin et ligula eu velit tincidunt bibendum sit amet et mauris. ",
        image: "https://placehold.it/500x500",
        price: new Decimal(9.99),
      },
      {
        id: 1,
        authorId: 2,
        name: "Something",
        description:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur cursus eu sem ac commodo. Integer porttitor ullamcorper tristique. Proin et ligula eu velit tincidunt bibendum sit amet et mauris. ",
        image: "https://placehold.it/500x500",
        price: new Decimal(9.99),
      },
      {
        id: 1,
        authorId: 2,
        name: "Something",
        description:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur cursus eu sem ac commodo. Integer porttitor ullamcorper tristique. Proin et ligula eu velit tincidunt bibendum sit amet et mauris. ",
        image: "https://placehold.it/500x500",
        price: new Decimal(9.99),
      },
      {
        id: 1,
        authorId: 2,
        name: "Something",
        description:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur cursus eu sem ac commodo. Integer porttitor ullamcorper tristique. Proin et ligula eu velit tincidunt bibendum sit amet et mauris. ",
        image: "https://placehold.it/500x500",
        price: new Decimal(9.99),
      },
      {
        id: 1,
        authorId: 2,
        name: "Something",
        description:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur cursus eu sem ac commodo. Integer porttitor ullamcorper tristique. Proin et ligula eu velit tincidunt bibendum sit amet et mauris. ",
        image: "https://placehold.it/500x500",
        price: new Decimal(9.99),
      },
      {
        id: 1,
        authorId: 2,
        name: "Something",
        description:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur cursus eu sem ac commodo. Integer porttitor ullamcorper tristique. Proin et ligula eu velit tincidunt bibendum sit amet et mauris. ",
        image: "https://placehold.it/500x500",
        price: new Decimal(9.99),
      },
  ];
  return (
    <div className={styles.main_container}>
      <ProductList products={products} />
    </div>
  );
};

export default Store;
