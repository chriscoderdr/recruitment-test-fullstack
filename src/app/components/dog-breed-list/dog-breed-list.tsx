import { DogBreed } from "@components/app/models/models";
import { DogBreedItem } from "./dog-breed-item/dog-breed-item";
import styles from "./dog-breed-list.module.css";

type IDogBreedListProps = {
  dogBreeds: DogBreed[];
};

export const DogBreedList = ({ dogBreeds }: IDogBreedListProps) => {
  return (
    <div className={styles.dog_list}>
      {dogBreeds
        ? dogBreeds.map((dogBreed) => (
            <DogBreedItem key={dogBreed.name} dogBreed={dogBreed} />
          ))
        : ""}
    </div>
  );
};
