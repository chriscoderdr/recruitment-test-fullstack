import { Inter } from "next/font/google";
import styles from "./page.module.css";
import { DogBreedList } from "./components/dog-breed-list/dog-breed-list";

const inter = Inter({ subsets: ["latin"] });

export default async function Home() {
  const dogs = (await (await fetch("http://localhost:3000/api/dogs")).json())
    .data;
  return (
    <main className={inter.className}>
    <div className={styles.main}>
      <div className={styles.title_container}>
        <h1>Tasks</h1>
      </div>
      <ul className={styles.menu}>
      <li><a href="/task1-showcase">Task 1</a></li>
      <li><a href="/dog-breeds">Task 2</a></li>
      <li><a href="/dog-breeds">Task 3</a></li>
      </ul>
    </div>
    </main>
  );
}
