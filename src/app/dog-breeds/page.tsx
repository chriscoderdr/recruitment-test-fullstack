import { Inter } from "next/font/google";
import styles from "./page.module.css";
import { DogBreedList } from "../components/dog-breed-list/dog-breed-list";
import { DogBreed } from "../models/models";

const inter = Inter({ subsets: ["latin"] });

export default async function DogBreeds() {
  const dogBreeds = (
    await (await fetch("http://localhost:3000/api/dogs")).json()
  ).data as DogBreed[];
  return (
    <main className={inter.className}>
      <div className={styles.main}>
        <div className={styles.title_container}>
          <h1>Dog List</h1>
        </div>
        <DogBreedList dogBreeds={dogBreeds} />
      </div>
    </main>
  );
}
