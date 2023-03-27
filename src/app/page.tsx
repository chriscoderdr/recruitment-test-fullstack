'use client';

import Image from "next/image";
import { Inter } from "next/font/google";
import styles from "./page.module.css";
import { PetList } from "./components/pet-list/pet-list";
import { useEffect, useState } from "react";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  const [dogs, setDogs] = useState();

  useEffect(() => {
    fetch('api/dogs').then((res) => {
      res.json().then((data) => {
        setDogs(data.data);
      });
    });
  }, []);

  return (
    <main className={styles.main}>
      <div className={styles.title_container}>
        <h1>Dog List</h1>
      </div>
      <PetList dogs={dogs} />
    </main>
  );
}
