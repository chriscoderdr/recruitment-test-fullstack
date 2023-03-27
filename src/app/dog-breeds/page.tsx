import { Inter } from "next/font/google";
import styles from "./page.module.css";
import { DogBreedList } from "../components/dog-breed-list/dog-breed-list";

const inter = Inter({ subsets: ["latin"] });

export default async function DogBreeds() {
  const dogs = (await (await fetch("http://localhost:3000/api/dogs")).json())
    .data;
  return (
    <main className={inter.className}>
    <div className={styles.main}>
      <div className={styles.title_container}>
        <h1>Dog List</h1>
      </div>
      <DogBreedList dogs={dogs} />
    </div>
    </main>
  );
}
