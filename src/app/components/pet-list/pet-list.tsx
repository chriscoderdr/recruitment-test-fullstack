import { PetItem } from "./pet-item/pet-item";
import styles from './pet-list.module.css';

export const PetList = ({dogs}) => {
  return (
    <div className={styles.dog_list}>
      {dogs ? dogs.map((dog) => <PetItem dog={dog} />) : ''}
    </div>
  );
};
