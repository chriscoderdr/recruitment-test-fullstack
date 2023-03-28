import { DogBreed } from "@app/models/models";
import styles from "./dog-breed-item.module.css";

type IDogBreedItemProps = {
  dogBreed: DogBreed;
};

export const DogBreedItem = ({ dogBreed }: IDogBreedItemProps) => {
  return (
    <div className={styles.dog_item}>
      <div className={styles.imageContainer}>
        <img src={dogBreed.image} alt="Dog breed image" />
        <div className={styles.overlay}>
          {dogBreed.sub_breeds.length > 0 && (
            <ul>
              {dogBreed.sub_breeds.slice(0, 4).map((sub_breed) => {
                return <li key={sub_breed}>{sub_breed}</li>;
              })}
            </ul>
          )}
          {(!dogBreed.sub_breeds || dogBreed.sub_breeds.length == 0) && (
            <p>This Breed doesn&apos;t have any registered sub breed</p>
          )}
        </div>
      </div>
      <p className={styles.dog_name}>{dogBreed.name}</p>
    </div>
  );
};
