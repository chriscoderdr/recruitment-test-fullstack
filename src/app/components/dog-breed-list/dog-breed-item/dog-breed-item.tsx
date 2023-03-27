import { DogBreed } from "@components/app/models/models";
import { Fragment } from "react";
import styles from "./dog-breed-item.module.css";

type IDogBreedItemProps = {
  dogBreed: DogBreed
}

export const DogBreedItem = ({ dogBreed }: IDogBreedItemProps) => {
  return (
    <div className={styles.dog_item}>
      <div className={styles.imageContainer}>
        <img src={dogBreed.image} />
        <div className={styles.overlay}>
          <ul>
            {dogBreed.sub_breeds.length > 0 ? (
              dogBreed.sub_breeds.slice(0, 4).map((sub_breed) => {
                return <li>{sub_breed}</li>;
              })
            ) : (
              <Fragment>
                This Breed doesn't have any registered sub breed
              </Fragment>
            )}
          </ul>
        </div>
      </div>
      <p className={styles.dog_name}>{dogBreed.name}</p>
    </div>
  );
};
