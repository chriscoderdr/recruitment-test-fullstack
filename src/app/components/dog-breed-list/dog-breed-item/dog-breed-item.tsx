import { Fragment } from "react";
import styles from "./dog-breed-item.module.css";

export const DogBreedItem = ({dog}) => {
  console.log(dog);
  // console.log(dog);
  return (
    <div className={styles.dog_item}>
      <div className={styles.imageContainer}>
        <img src="https://images.unsplash.com/photo-1543466835-00a7907e9de1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format" />
        <div className={styles.overlay}>
          <ul>
            {dog.sub_breeds
              ? dog.sub_breeds.slice(0, 4).map((sub_breed) => {
                  return (
                    <Fragment>
                      <li>{sub_breed}</li>
                    </Fragment>
                  );
                })
              : ""}
          </ul>
        </div>
      </div>
      <p className={styles.dog_name}>{dog.name}</p>
    </div>
  );
};
