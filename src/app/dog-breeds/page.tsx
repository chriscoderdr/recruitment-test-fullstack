"use client";
import { Inter } from "next/font/google";
import styles from "./page.module.css";
import { DogBreedList } from "../components/dog-breed-list/dog-breed-list";
import { DogBreed } from "../models/models";
import { urlUtil } from "@app/utils/urlUtil";
import { useState, useEffect } from "react";

const inter = Inter({ subsets: ["latin"] });

export default function DogBreeds() {
  const [breeds, setBreeds] = useState<DogBreed[]>();

  useEffect(() => {
    fetch(urlUtil.getFullPath("/api/dogs"))
      .then(async (res) => {
        const data = (await res.json()).data;
        if (res.ok && data) {
          setBreeds(data);
        }
      })
      .catch((e: any) => {
        alert(e.message);
      });
  }, []);

  return (
    <main className={inter.className}>
      <div className={styles.main}>
        <div className={styles.title_container}>
          <h1>Dog List</h1>
        </div>
        {breeds && <DogBreedList dogBreeds={breeds} />}
      </div>
    </main>
  );
}
