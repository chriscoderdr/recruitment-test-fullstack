import { PetItem } from "./pet-item/pet-item";
import styles from './pet-list.module.css';

export const PetList = () => {
  return (
    <div className={styles.dog_list}>
      <PetItem />
      <PetItem />
      <PetItem />
    </div>
  );
};
