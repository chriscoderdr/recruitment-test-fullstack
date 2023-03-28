import { DogBreed } from "@app/models/models";
import { DogBreedItem } from "./dog-breed-item/dog-breed-item";

type IDogBreedListProps = {
  dogBreeds: DogBreed[];
};

export const DogBreedList = ({ dogBreeds }: IDogBreedListProps) => {
  return (<></>);
  //   <div className={styles.dog_list}>
  //     {dogBreeds
  //       ? dogBreeds.map((dogBreed) => (
  //           <DogBreedItem key={dogBreed.name} dogBreed={dogBreed} />
  //         ))
  //       : ""}
  //   </div>
  // );
};
