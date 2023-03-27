import { DogBreedItem } from "./dog-breed-item/dog-breed-item";
import styles from './dog-breed-list.module.css';

export const DogBreedList = ({dogs}) => {
  return (
    <div className={styles.dog_list}>
      {dogs ? dogs.map((dog) => <DogBreedItem key={dog.name} dog={dog} />) : ''}
    </div>
  );
};
