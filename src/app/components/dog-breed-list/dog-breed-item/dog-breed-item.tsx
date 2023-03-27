import { Fragment } from "react";
import styles from "./dog-breed-item.module.css";

export const DogBreedItem = ({ dog }) => {
  return (
    <div className={styles.dog_item}>
      <div className={styles.imageContainer}>
        <img src={dog.image} />
        <div className={styles.overlay}>
          {dog.sub_breeds.length > 0 ? (
            dog.sub_breeds.slice(0, 4).map((sub_breed) => {
              return (
                <ul>
                  <li>{sub_breed}</li>
                </ul>
              );
            })
          ) : (
            <Fragment>
              This Breed doesn't have any registered sub breed
            </Fragment>
          )}
        </div>
      </div>
      <p className={styles.dog_name}>{dog.name}</p>
    </div>
  );
};
